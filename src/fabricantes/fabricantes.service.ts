import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { normalizarTexto } from '../common/normalizar-texto';
import { CreateFabricanteDto } from './dto/create-fabricante.dto';
import { UpdateFabricanteDto } from './dto/update-fabricante.dto';

@Injectable()
export class FabricantesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateFabricanteDto) {
    try {
      return await this.prisma.fabricante.create({
        data: {
          nombre: dto.nombre.trim(),
          nombreNormalizado: normalizarTexto(dto.nombre),
        },
      });
    } catch (error) {
      this.handleDuplicado(error);
    }
  }

  findAll() {
    return this.prisma.fabricante.findMany({ orderBy: { nombre: 'asc' } });
  }

  async findOne(id: number) {
    const fabricante = await this.prisma.fabricante.findUnique({ where: { id } });
    if (!fabricante) {
      throw new NotFoundException(`Fabricante con id ${id} no encontrado`);
    }
    return fabricante;
  }

  async update(id: number, dto: UpdateFabricanteDto) {
    await this.findOne(id);
    try {
      return await this.prisma.fabricante.update({
        where: { id },
        data: {
          ...(dto.nombre && {
            nombre: dto.nombre.trim(),
            nombreNormalizado: normalizarTexto(dto.nombre),
          }),
        },
      });
    } catch (error) {
      this.handleDuplicado(error);
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.prisma.fabricante.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003') {
        throw new ConflictException(
          'No se puede eliminar: el fabricante tiene lotes asociados',
        );
      }
      throw error;
    }
  }

  private handleDuplicado(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new ConflictException('Ya existe un fabricante con ese nombre');
    }
    throw error;
  }
}