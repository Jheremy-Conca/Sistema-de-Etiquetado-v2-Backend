import { BadGatewayException, Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as os from 'os';
import * as path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { IMPRESORA_CONFIG } from '../config/etiqueta.config';

const execFileAsync = promisify(execFile);
const SCRIPT_IMPRESION = path.join(__dirname, '..', 'assets', 'scripts', 'imprimir-etiqueta.ps1');

@Injectable()
export class ImpresionService {
  async imprimir(pngBuffer: Buffer): Promise<void> {
    const rutaTemp = path.join(os.tmpdir(), `etiqueta-${Date.now()}.png`);
    await fs.writeFile(rutaTemp, pngBuffer);

    try {
      const { stdout } = await execFileAsync('powershell.exe', [
        '-NoProfile',
        '-ExecutionPolicy',
        'Bypass',
        '-File',
        SCRIPT_IMPRESION,
        '-ImagePath',
        rutaTemp,
        '-PrinterName',
        IMPRESORA_CONFIG.nombre,
        '-PaperSizeName',
        IMPRESORA_CONFIG.tamanoPapel,
      ]);

      console.log('[impresion] salida del script PowerShell:\n' + stdout);

      if (!stdout.includes('IMPRESION_OK')) {
        throw new Error(stdout.trim() || 'el script no confirmó la impresión');
      }
    } catch (error) {
      console.error('[impresion] fallo al enviar trabajo de impresión:', error);
      throw new BadGatewayException(
        'No se pudo enviar la etiqueta a la impresora. Verifica que esté encendida, con el rollo cargado, y que el nombre y tamaño de papel coincidan EXACTAMENTE con los registrados en Windows.',
      );
    } finally {
      await fs.unlink(rutaTemp).catch(() => {});
    }
  }
}