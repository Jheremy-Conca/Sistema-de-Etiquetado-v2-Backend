import { Module } from '@nestjs/common';
import { EtiquetasController } from './etiquetas.controller';
import { TrabajosImpresionService } from './trabajos-impresion.service';
import { LimpiezaTrabajosService } from './limpieza-trabajos.service';

@Module({
  controllers: [EtiquetasController],
  providers: [TrabajosImpresionService, LimpiezaTrabajosService],
})
export class EtiquetasModule {}