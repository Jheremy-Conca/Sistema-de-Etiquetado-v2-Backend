import * as path from 'path';

export const ETIQUETA_LABEL_CONFIG = {
  widthMm: 108,
  heightMm: 60,
  dpi: 360,  // antes 300 — coincide con la resolución nativa real del driver de la Epson
};

export const ETIQUETA_LABEL_PX = {
  width: Math.round((ETIQUETA_LABEL_CONFIG.widthMm / 25.4) * ETIQUETA_LABEL_CONFIG.dpi),
  height: Math.round((ETIQUETA_LABEL_CONFIG.heightMm / 25.4) * ETIQUETA_LABEL_CONFIG.dpi),
};

// etiqueta.config.ts
export const ETIQUETA_EMPRESA_CONFIG = {
  fondoPath: path.join(__dirname, '..', 'assets', 'etiqueta-fondo.png'),
  fondoRomboPath: path.join(__dirname, '..', 'assets', 'etiqueta-fondo-rombo.png'),
  fondoBlancoPath: path.join(__dirname, '..', 'assets', 'etiqueta-fondo-blanco.png'),
  fondoMuestrasPath: path.join(__dirname, '..', 'assets', 'etiqueta-fondo-muestras.png'), // nuevo
};

export const ETIQUETA_FUENTE_CONFIG = {
  fontPath: path.join(__dirname, '..', 'assets', 'fonts', 'selawk.ttf'),
  fontBoldPath: path.join(__dirname, '..', 'assets', 'fonts', 'selawkb.ttf'),
  fontFormat: 'truetype',
  fallbackFamily: 'Arial, sans-serif',
};

export const IMPRESORA_CONFIG = {
  nombre: process.env.EPSON_PRINTER_NAME ?? 'EPSON TM-C3500 Ver2',
  tamanoPapel: process.env.EPSON_PAPER_SIZE ?? 'Mate Brilloso 10x6 cm',
};