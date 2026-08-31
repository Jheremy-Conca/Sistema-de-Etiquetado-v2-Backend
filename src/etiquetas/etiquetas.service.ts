import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GenerarEtiquetaDto } from './dto/generar-etiqueta.dto';
import { EtiquetaGeneratorService } from './etiqueta-generator.service';
import { ImpresionService } from './impresion.service';

@Injectable()
export class EtiquetasService {
  constructor(
    private prisma: PrismaService,
    private generator: EtiquetaGeneratorService,
    private impresion: ImpresionService,
  ) {}

  async generar(dto: GenerarEtiquetaDto): Promise<Buffer> {
    const [lote, plantilla] = await Promise.all([
      this.prisma.lote.findUnique({
        where: { id: dto.loteId },
        include: { producto: true, fabricante: true },
      }),
      this.prisma.plantilla.findUnique({ where: { id: dto.plantillaId } }),
    ]);

    if (!lote) throw new NotFoundException(`Lote con id ${dto.loteId} no encontrado`);
    if (!plantilla) throw new NotFoundException(`Plantilla con id ${dto.plantillaId} no encontrada`);

    const imagen = await this.generator.generarImagen(plantilla.archivo, {
      producto: lote.producto.nombre,
      numeroLote: lote.numeroLote,
      fabricante: lote.fabricante.nombre,
      fechaFabricacion: lote.fechaFabricacion,
      fechaVencimiento: lote.fechaVencimiento,
      pesoBruto: dto.pesoBruto,
      unidadBruto: dto.unidadBruto,
      cantidadNeta: dto.cantidadNeta,
      unidadNeta: dto.unidadNeta,
      proforma: dto.proforma,
      // Los valores NFPA son propiedad del Producto, no de la etiqueta
      // puntual que se está imprimiendo — salen de lote.producto, no del DTO.
      nfpaSalud: lote.producto.nfpaSalud,
      nfpaInflamabilidad: lote.producto.nfpaInflamabilidad,
      nfpaReactividad: lote.producto.nfpaReactividad,
    });

    await this.impresion.imprimir(imagen);
    return imagen;
  }
}
