import { Module } from '@nestjs/common';
import { EtiquetasController } from './etiquetas.controller';
import { EtiquetasService } from './etiquetas.service';
import { EtiquetaGeneratorService } from './etiqueta-generator.service';
import { ImpresionService } from './impresion.service';

@Module({
  controllers: [EtiquetasController],
  providers: [EtiquetasService, EtiquetaGeneratorService, ImpresionService],
})
export class EtiquetasModule {}