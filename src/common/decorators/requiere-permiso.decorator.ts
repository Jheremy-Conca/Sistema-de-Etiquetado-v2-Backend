// src/common/decorators/requiere-permiso.decorator.ts
import { SetMetadata } from '@nestjs/common';

export type AccionPermiso = 'puedeVer' | 'puedeCrear' | 'puedeEditar' | 'puedeEliminar';

export const PERMISO_KEY = 'permiso';

export interface PermisoRequerido {
  recurso: string; // valor del enum Recurso, ej. 'LOTES'
  accion: AccionPermiso;
}

export const RequierePermiso = (recurso: string, accion: AccionPermiso) =>
  SetMetadata(PERMISO_KEY, { recurso, accion } satisfies PermisoRequerido);