// src/common/guards/supabase-auth.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { supabaseAdmin } from '../../infrastructure/supabase/supabase-admin.client';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader: string | undefined = request.headers['authorization'];

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Falta el token de autenticación');
    }

    const token = authHeader.slice('Bearer '.length);
    const { data, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !data.user) {
      throw new UnauthorizedException('Token inválido o expirado');
    }

    const usuario = await this.prisma.usuario.findUnique({
      where: { supabaseUserId: data.user.id },
      include: { permisos: true }, // clave: traemos sus permisos por módulo
    });

    if (!usuario) {
      throw new UnauthorizedException('Usuario no registrado en el sistema');
    }

    request.usuario = { ...usuario, email: data.user.email };
    return true;
  }
}