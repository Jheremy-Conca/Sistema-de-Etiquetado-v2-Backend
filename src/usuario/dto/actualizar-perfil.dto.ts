import { z } from 'zod'

export const actualizarPerfilSchema = z.object({
  nombre: z.string().min(1).optional(),
  avatarUrl: z.string().url().optional(),
});

export type ActualizarPerfilDto = z.infer<typeof actualizarPerfilSchema>;