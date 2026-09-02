import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';

export class ActualizarEstadoTrabajoDto {
  @IsIn(['IMPRESO', 'ERROR'])
  estado: 'IMPRESO' | 'ERROR';

  @IsOptional()
  @IsString()
  @MaxLength(500)
  mensajeError?: string;
}