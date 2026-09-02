import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EtiquetaGeneratorService } from './etiqueta-generator.service';
import { SupabaseStorageService } from '../storage/supabase-storage.service';
import { GenerarEtiquetaDto } from './dto/generar-etiqueta.dto';
import { ActualizarEstadoTrabajoDto } from './dto/actualizar-estado-trabajo.dto';

@Injectable()
export class TrabajosImpresionService {
  constructor(
    private prisma: PrismaService,
    private generator: EtiquetaGeneratorService,
    private storage: SupabaseStorageService,
  ) {}

  async crear(dto: GenerarEtiquetaDto, creadoPorId: number) {
    const [lote, plantilla] = await Promise.all([
      this.prisma.lote.findUnique({ where: { id: dto.loteId }, include: { producto: true, fabricante: true } }),
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
      nfpaSalud: lote.producto.nfpaSalud,
      nfpaInflamabilidad: lote.producto.nfpaInflamabilidad,
      nfpaReactividad: lote.producto.nfpaReactividad,
    });

    const imagenPath = await this.storage.uploadTrabajoImpresion(imagen);

    const trabajo = await this.prisma.trabajoImpresion.create({
      data: {
        loteId: dto.loteId,
        plantillaId: dto.plantillaId,
        pesoBruto: dto.pesoBruto,
        unidadBruto: dto.unidadBruto,
        cantidadNeta: dto.cantidadNeta,
        unidadNeta: dto.unidadNeta,
        proforma: dto.proforma,
        imagenPath,
        creadoPorId,
      },
    });

    return { trabajoId: trabajo.id };
  }

  async listarPendientes() {
    const pendientes = await this.prisma.trabajoImpresion.findMany({
      where: { estado: 'PENDIENTE' },
      orderBy: { createdAt: 'asc' },
    });

    return Promise.all(
      pendientes.map(async (t) => ({
        id: t.id,
        imagenUrl: await this.storage.getSignedUrlTrabajoImpresion(t.imagenPath),
      })),
    );
  }

  async actualizarEstado(id: number, dto: ActualizarEstadoTrabajoDto) {
    const trabajo = await this.prisma.trabajoImpresion.findUnique({ where: { id } });
    if (!trabajo) throw new NotFoundException(`Trabajo ${id} no encontrado`);
    return this.prisma.trabajoImpresion.update({
      where: { id },
      data: { estado: dto.estado, mensajeError: dto.mensajeError ?? null },
    });
  }

  async obtenerEstado(id: number) {
    const trabajo = await this.prisma.trabajoImpresion.findUnique({
      where: { id },
      select: { id: true, estado: true, mensajeError: true },
    });
    if (!trabajo) throw new NotFoundException(`Trabajo ${id} no encontrado`);
    return trabajo;
  }
}