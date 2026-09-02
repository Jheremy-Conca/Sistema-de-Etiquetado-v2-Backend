import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseStorageService } from '../storage/supabase-storage.service';

const RETENCION_DIAS = Number(process.env.RETENCION_TRABAJOS_DIAS ?? 3);

@Injectable()
export class LimpiezaTrabajosService {
  private readonly logger = new Logger(LimpiezaTrabajosService.name);

  constructor(private prisma: PrismaService, private storage: SupabaseStorageService) {}

  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async limpiarTrabajosViejos() {
    const limite = new Date();
    limite.setDate(limite.getDate() - RETENCION_DIAS);

    const trabajos = await this.prisma.trabajoImpresion.findMany({
      where: { estado: { in: ['IMPRESO', 'ERROR'] }, updatedAt: { lt: limite } },
    });

    for (const trabajo of trabajos) {
      await this.storage
        .deleteTrabajoImpresion(trabajo.imagenPath)
        .catch((err) => this.logger.warn(`No se pudo borrar imagen del trabajo ${trabajo.id}: ${err.message}`));
      await this.prisma.trabajoImpresion.delete({ where: { id: trabajo.id } });
    }

    if (trabajos.length) this.logger.log(`Limpieza: ${trabajos.length} trabajos eliminados`);
  }
}