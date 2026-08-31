import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches, MaxLength } from 'class-validator';

export class CreatePlantillaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  // Nombre del archivo de template (html/hbs) dentro de la carpeta de plantillas,
  // ej: "estandar.hbs". No es una ruta absoluta.
  // Whitelist estricta (solo letras/números/guiones + extensión .hbs) para evitar
  // path traversal: sin esto, 'archivo' llega tal cual a path.join(...) en
  // etiqueta-generator.service.ts y un valor como "../../../.env" leería
  // archivos fuera de la carpeta de plantillas.
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @Matches(/^[a-zA-Z0-9_-]+\.hbs$/, {
    message: 'archivo debe ser un nombre de archivo simple terminado en .hbs (sin rutas ni caracteres especiales)',
  })
  archivo: string;

  @IsOptional()
  @IsBoolean()
  activa?: boolean;
}