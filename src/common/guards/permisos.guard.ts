// src/common/guards/permisos.guard.ts
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISO_KEY, PermisoRequerido } from '../decorators/requiere-permiso.decorator';

@Injectable()
export class PermisosGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requerido = this.reflector.getAllAndOverride<PermisoRequerido>(PERMISO_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Sin @RequierePermiso(...) → solo exige estar autenticado, no restringe por módulo
    if (!requerido) return true;

// permisos.guard.ts
const request = context.switchToHttp().getRequest();
const usuario = request.usuario;   // antes: request.user

    if (usuario?.esAdmin) return true; // el admin siempre pasa

    const permiso = usuario?.permisos?.find((p: any) => p.recurso === requerido.recurso);

    if (!permiso || !permiso[requerido.accion]) {
      throw new ForbiddenException('No tienes permiso para esta acción');
    }

    return true;
  }
}