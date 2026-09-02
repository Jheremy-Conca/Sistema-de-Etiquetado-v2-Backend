import { Module } from '@nestjs/common';
import { EtiquetasController } from './etiquetas.controller';
import { EtiquetaGeneratorService } from './etiqueta-generator.service';
import { TrabajosImpresionService } from './trabajos-impresion.service';
import { LimpiezaTrabajosService } from './limpieza-trabajos.service';
import { StorageModule } from '../storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [EtiquetasController],
  providers: [EtiquetaGeneratorService, TrabajosImpresionService, LimpiezaTrabajosService],
})
export class EtiquetasModule {}