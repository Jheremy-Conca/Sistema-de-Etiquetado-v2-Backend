import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateLoteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  numeroLote: string;

  @IsString()
  @IsNotEmpty()
  fechaFabricacion: string;

  @IsString()
  @IsNotEmpty()
  fechaVencimiento: string;

  @IsInt()
  productoId: number;

  @IsInt()
  fabricanteId: number;
}