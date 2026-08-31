import { z } from 'zod';
import { permisoSchema } from './usuarios.dto';

export const actualizarPermisosSchema = z.object({
  permisos: z.array(permisoSchema),
});

export type ActualizarPermisosDto = z.infer<typeof actualizarPermisosSchema>;