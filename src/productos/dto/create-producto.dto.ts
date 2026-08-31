import { IsInt, IsNotEmpty, IsOptional, Max, MaxLength, Min, IsString } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(4)
  nfpaSalud?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(4)
  nfpaInflamabilidad?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(4)
  nfpaReactividad?: number;
}