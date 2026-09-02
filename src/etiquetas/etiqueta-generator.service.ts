import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';
import puppeteer, { Browser } from 'puppeteer';
import {
  ETIQUETA_LABEL_PX,
  ETIQUETA_EMPRESA_CONFIG,
  ETIQUETA_FUENTE_CONFIG,
} from '../config/etiqueta.config';

interface EtiquetaParaGenerar {
  producto: string;
  numeroLote: string;
  fabricante: string;
  fechaFabricacion: string;
  fechaVencimiento: string;
  pesoBruto: string;
  unidadBruto: string;
  cantidadNeta?: string | null;
  unidadNeta: string;
  proforma: string;
  nfpaSalud?: number | null;
  nfpaInflamabilidad?: number | null;
  nfpaReactividad?: number | null;
}

@Injectable()
export class EtiquetaGeneratorService {
  private browser: Browser | null = null;
  private templatesCompiladas = new Map<string, HandlebarsTemplateDelegate>();
  private fondoBase64: string | null = null;
  private fondoRomboBase64: string | null = null;
  private fondoBlancoBase64: string | null = null; // nuevo
  private fontBase64: string | null = null;
  private fontBoldBase64: string | null = null;

  private async getBrowser(): Promise<Browser> {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
    }
    return this.browser;
  }

  // archivo viene de Plantilla.archivo (ej. "estandar.hbs")
  private getTemplate(archivo: string): HandlebarsTemplateDelegate {
    const ruta = path.join(__dirname, '..', 'assets', 'templates', archivo);
    const html = fs.readFileSync(ruta, 'utf-8');
    return Handlebars.compile(html); // siempre lee el archivo actual, sin cache
  }

  private getFondoBase64(): string {
    if (!this.fondoBase64) {
      this.fondoBase64 = fs
        .readFileSync(ETIQUETA_EMPRESA_CONFIG.fondoPath)
        .toString('base64');
    }
    return this.fondoBase64;
  }

  private getFondoRomboBase64(): string {
    if (!this.fondoRomboBase64) {
      this.fondoRomboBase64 = fs
        .readFileSync(ETIQUETA_EMPRESA_CONFIG.fondoRomboPath)
        .toString('base64');
    }
    return this.fondoRomboBase64;
  }

  private getFondoBlancoBase64(): string {
    // nuevo
    if (!this.fondoBlancoBase64) {
      this.fondoBlancoBase64 = fs
        .readFileSync(ETIQUETA_EMPRESA_CONFIG.fondoBlancoPath)
        .toString('base64');
    }
    return this.fondoBlancoBase64;
  }

  private fondoMuestrasBase64: string | null = null; // nuevo (junto a los otros 3)

  private getFondoMuestrasBase64(): string {
    if (!this.fondoMuestrasBase64) {
      this.fondoMuestrasBase64 = fs
        .readFileSync(ETIQUETA_EMPRESA_CONFIG.fondoMuestrasPath)
        .toString('base64');
    }
    return this.fondoMuestrasBase64;
  }

  private getFontBase64(): string {
    if (!this.fontBase64) {
      this.fontBase64 = fs
        .readFileSync(ETIQUETA_FUENTE_CONFIG.fontPath)
        .toString('base64');
    }
    return this.fontBase64;
  }

  private getFontBoldBase64(): string {
    if (!this.fontBoldBase64) {
      this.fontBoldBase64 = fs
        .readFileSync(ETIQUETA_FUENTE_CONFIG.fontBoldPath)
        .toString('base64');
    }
    return this.fontBoldBase64;
  }

  private construirHtml(
    archivo: string,
    etiqueta: EtiquetaParaGenerar,
  ): string {
    const esVolumen =
      etiqueta.unidadNeta === 'ML' || etiqueta.unidadNeta === 'L';
    const labelNeto = esVolumen ? 'CANT. NETO' : 'PESO NETO';

    const template = this.getTemplate(archivo);

    const fondoBase64 =
      archivo === 'con-rombo.hbs'
        ? this.getFondoRomboBase64()
        : archivo === 'blanco.hbs'
          ? this.getFondoBlancoBase64()
          : archivo === 'muestras.hbs'
            ? this.getFondoMuestrasBase64()
            : this.getFondoBase64();

    // Solo embebemos Selawik cuando NO corremos en Windows (ej. Render/Linux),
    // porque ahí Segoe UI no existe. En la PC Windows local, Segoe UI real
    // ya está instalada y se referencia por nombre (evita el bug de la "J"
    // asimétrica que tenía Selawik como sustituto).
    const debeEmbeberFuente = process.platform !== 'win32';
    const fontBase64 = debeEmbeberFuente ? this.getFontBase64() : null;
    const fontBoldBase64 = debeEmbeberFuente ? this.getFontBoldBase64() : null;

    return template({
      widthPx: ETIQUETA_LABEL_PX.width,
      heightPx: ETIQUETA_LABEL_PX.height,
      fondoBase64,
      fontBase64,
      fontBoldBase64,
      fallbackFontFamily: 'Arial, sans-serif',
      producto: etiqueta.producto,
      numeroLote: etiqueta.numeroLote,
      fabricante: etiqueta.fabricante,
      fechaFabricacion: etiqueta.fechaFabricacion,
      fechaVencimiento: etiqueta.fechaVencimiento,
      pesoBruto: etiqueta.pesoBruto,
      unidadBruto: etiqueta.unidadBruto,
      pesoNeto: etiqueta.cantidadNeta ?? '—',
      unidadNeto: etiqueta.unidadNeta,
      labelNeto,
      proforma: etiqueta.proforma,
      nfpaSalud: etiqueta.nfpaSalud ?? 0,
      nfpaInflamabilidad: etiqueta.nfpaInflamabilidad ?? 0,
      nfpaReactividad: etiqueta.nfpaReactividad ?? 0,
    });
  }

  async generarImagen(
    archivo: string,
    etiqueta: EtiquetaParaGenerar,
  ): Promise<Buffer> {
    const html = this.construirHtml(archivo, etiqueta);
    const browser = await this.getBrowser();
    const page = await browser.newPage();
    try {
      await page.setViewport({
        width: ETIQUETA_LABEL_PX.width,
        height: ETIQUETA_LABEL_PX.height,
        deviceScaleFactor: 1,
      });
      await page.setContent(html, { waitUntil: 'load' });
      await page.evaluateHandle('document.fonts.ready');
      await page.evaluate(() => {
        const w = window as unknown as { ajustarNombreProducto?: () => void };
        if (typeof w.ajustarNombreProducto === 'function') {
          w.ajustarNombreProducto();
        }
      });
      return (await page.screenshot({ type: 'png' })) as Buffer;
    } finally {
      await page.close();
    }
  }

  async cerrarBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}