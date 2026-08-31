import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

/**
 * Exige que el usuario autenticado sea Admin (esAdmin: true).
 * Debe usarse SIEMPRE después de SupabaseAuthGuard en la cadena de guards,
 * ya que depende de que este último haya cargado el usuario en la request.
 *
 * NOTA: asume que SupabaseAuthGuard deja el usuario cargado en `request.usuario`.
 * Si en tu SupabaseAuthGuard la propiedad se llama distinto (p.ej. `request.user`),
 * ajusta la línea de abajo.
 */
@Injectable()
export class EsAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const usuario = request.usuario;

    if (!usuario?.esAdmin) {
      throw new ForbiddenException('Esta acción requiere permisos de administrador');
    }

    return true;
  }
}