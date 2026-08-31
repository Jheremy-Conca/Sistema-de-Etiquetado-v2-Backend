import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { supabaseAdmin } from '../infrastructure/supabase/supabase-admin.client';
import { CrearUsuarioDto } from './dto/usuarios.dto';
import { ActualizarPermisosDto } from './dto/actualizar-permisos.dto';
import { ActualizarPerfilDto } from './dto/actualizar-perfil.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async crear(dto: CrearUsuarioDto) {
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: dto.email,
      password: dto.password,
      email_confirm: true,
    });

    if (error || !data.user) {
      throw new BadRequestException(`Error creando usuario en Supabase: ${error?.message}`);
    }

    try {
      return await this.prisma.usuario.create({
        data: {
          supabaseUserId: data.user.id,
          nombre: dto.nombre,
          esAdmin: dto.esAdmin,
          permisos: {
            create: dto.esAdmin ? [] : dto.permisos, // admin no necesita filas de permiso
          },
        },
        include: { permisos: true },
      });
    } catch {
      await supabaseAdmin.auth.admin.deleteUser(data.user.id);
      throw new InternalServerErrorException('Error guardando usuario en la base de datos');
    }
  }

  async listar() {
    return this.prisma.usuario.findMany({
      include: { permisos: true },
      orderBy: { createdAt: 'desc' },
    });
  }

async actualizarPermisos(usuarioId: number, permisos: ActualizarPermisosDto['permisos']) {
  const usuario = await this.prisma.usuario.findUnique({ where: { id: usuarioId } });
  if (!usuario) throw new NotFoundException('Usuario no encontrado');

  return this.prisma.$transaction(async (tx) => {
    await tx.permiso.deleteMany({ where: { usuarioId } });

    if (permisos.length > 0) {
      await tx.permiso.createMany({
        data: permisos.map((p) => ({ ...p, usuarioId })),
      });
    }

    return tx.usuario.findUnique({
      where: { id: usuarioId },
      include: { permisos: true },
    });
  });
}

  async actualizarPerfil(usuarioId: number, dto: ActualizarPerfilDto) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id: usuarioId } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    return this.prisma.usuario.update({
      where: { id: usuarioId },
      data: dto, // solo nombre y/o avatarUrl, ambos opcionales
      include: { permisos: true },
    });
  }
}