import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateFabricanteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;
}