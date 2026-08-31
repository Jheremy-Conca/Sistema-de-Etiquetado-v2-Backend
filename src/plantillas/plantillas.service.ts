import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlantillaDto } from './dto/create-plantilla.dto';
import { UpdatePlantillaDto } from './dto/update-plantilla.dto';

@Injectable()
export class PlantillasService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePlantillaDto) {
    try {
      return await this.prisma.plantilla.create({
        data: {
          nombre: dto.nombre.trim(),
          archivo: dto.archivo.trim(),
          ...(dto.activa !== undefined && { activa: dto.activa }),
        },
      });
    } catch (error) {
      this.handleDuplicado(error);
    }
  }

  // El selector de "Generar Etiqueta" solo debe listar plantillas activas
  findAll(soloActivas = false) {
    return this.prisma.plantilla.findMany({
      where: soloActivas ? { activa: true } : undefined,
      orderBy: { nombre: 'asc' },
    });
  }

  async findOne(id: number) {
    const plantilla = await this.prisma.plantilla.findUnique({ where: { id } });
    if (!plantilla) {
      throw new NotFoundException(`Plantilla con id ${id} no encontrada`);
    }
    return plantilla;
  }

  async update(id: number, dto: UpdatePlantillaDto) {
    await this.findOne(id);
    try {
      return await this.prisma.plantilla.update({
        where: { id },
        data: {
          ...(dto.nombre && { nombre: dto.nombre.trim() }),
          ...(dto.archivo && { archivo: dto.archivo.trim() }),
          ...(dto.activa !== undefined && { activa: dto.activa }),
        },
      });
    } catch (error) {
      this.handleDuplicado(error);
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.plantilla.delete({ where: { id } });
  }

  private handleDuplicado(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new ConflictException('Ya existe una plantilla con ese nombre');
    }
    throw error;
  }
}