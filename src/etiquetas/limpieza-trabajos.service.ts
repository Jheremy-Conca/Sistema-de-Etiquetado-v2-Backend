import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';

const RETENCION_DIAS = Number(process.env.RETENCION_TRABAJOS_DIAS ?? 3);

@Injectable()
export class LimpiezaTrabajosService {
  private readonly logger = new Logger(LimpiezaTrabajosService.name);

  constructor(private prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async limpiarTrabajosViejos() {
    const limite = new Date();
    limite.setDate(limite.getDate() - RETENCION_DIAS);

    const resultado = await this.prisma.trabajoImpresion.deleteMany({
      where: { estado: { in: ['IMPRESO', 'ERROR'] }, updatedAt: { lt: limite } },
    });

    if (resultado.count) this.logger.log(`Limpieza: ${resultado.count} trabajos eliminados`);
  }
}