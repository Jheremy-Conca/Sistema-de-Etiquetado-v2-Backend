# Sistema de Etiquetado v2 — Backend

API REST construida con **NestJS** para el Sistema de Etiquetado de productos fraccionados (repo `backend`, parte de `sistema-etiquetado-fraccionados`). Gestiona fabricantes, productos, lotes, plantillas de etiquetas y usuarios, y genera las etiquetas finales (con soporte de rombo NFPA 704) como imagen para impresión térmica.

## Stack

- **NestJS 11** (`@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express` `^11.0.1`) + TypeScript
- **Prisma ORM 7.9.1** (`@prisma/client`, `@prisma/adapter-pg`) sobre **PostgreSQL**, con `driverAdapters` (cliente generado en `src/generated/prisma`)
- **Supabase** (`@supabase/supabase-js ^2.112.4`) como proveedor de autenticación (`auth.users`) y de almacenamiento de archivos (COAs de los lotes)
- **Handlebars 4.7.9** + **Puppeteer 25.8.0** para renderizar las plantillas de etiqueta (HTML → imagen)
- `@nestjs/throttler ^6.5.0` para rate limiting (100 peticiones/IP/minuto)
- `class-validator` / `class-transformer` para los DTOs, aplicados vía `ValidationPipe` global
- TypeScript compilado con `module`/`moduleResolution: nodenext`, `target: ES2023` (ver `tsconfig.json`)

## Estructura de módulos

| Módulo | Responsabilidad |
|---|---|
| `fabricantes` | CRUD de fabricantes |
| `productos` | CRUD de productos |
| `lotes` | CRUD de lotes, incluye subida/lectura/eliminación de COA (certificado de análisis) |
| `plantillas` | CRUD de plantillas de etiqueta |
| `etiquetas` | Generación de la etiqueta final (imagen) a partir de una plantilla + datos del lote, e impresión directa |
| `usuario` | Perfil del usuario autenticado, administración de usuarios y permisos por rol |
| `prisma` | Servicio/módulo global de acceso a base de datos |
| `storage` | Wrapper sobre Supabase Storage |
| `common` | Guards y decorador `@RequierePermiso` para el sistema de permisos granulares |

### Modelo de datos (Prisma)

- **Usuario**: espejo local de Supabase Auth (`supabaseUserId` único, `nombre`, `esAdmin`, `avatarUrl`), con relación 1:N a **Permiso**.
- **Permiso**: por usuario + `Recurso` (`LOTES`, `PRODUCTOS`, `FABRICANTES`, `PLANTILLAS`, `COA`, `USUARIOS`), con flags `puedeVer`/`puedeCrear`/`puedeEditar`/`puedeEliminar`.
- **Fabricante**: `nombre`/`nombreNormalizado` únicos (evita duplicados tipo "Ácido Cítrico" vs "acido citrico"); 1:N con **Lote**.
- **Producto**: `nombre`/`nombreNormalizado` únicos, sin fabricante fijo (el fabricante varía por lote); campos NFPA opcionales (`nfpaSalud`, `nfpaInflamabilidad`, `nfpaReactividad`, 0-4).
- **Plantilla**: independiente de Producto, se elige al generar la etiqueta (`nombre` único, `archivo`, `activa`).
- **Lote**: `numeroLote`, `fechaFabricacion`/`fechaVencimiento` como `String` (formato tal cual viene en el COA, no se normaliza), `fechaVencimientoOrden` (`DateTime?`) calculado por el service solo para ordenar/filtrar, `coaUrl` (path en el bucket), único compuesto `[productoId, fabricanteId, numeroLote]`.

### Autenticación y permisos

- La autenticación vive 100% en **Supabase Auth**; el backend solo guarda un espejo local del usuario (rol, nombre) vinculado por `supabaseUserId`.
- `SupabaseAuthGuard` valida el JWT de Supabase en cada request.
- `PermisosGuard` + el decorador `@RequierePermiso('RECURSO', 'accion')` (`puedeVer` / `puedeCrear` / `puedeEditar` / `puedeEliminar`) controlan el acceso granular por recurso y rol.
- `EsAdminGuard` restringe rutas de administración de usuarios a rol admin.

### Endpoints principales

Todas las rutas bajo `fabricantes`, `productos`, `lotes` y `plantillas` siguen el mismo patrón REST (`POST /`, `GET /`, `GET /:id`, `PATCH /:id`, `DELETE /:id`) protegido por `SupabaseAuthGuard` + `PermisosGuard`.

- `POST /etiquetas/generar` — genera la etiqueta e imprime directo; responde el PNG como `Buffer` binario (`Content-Type: image/png`, no envuelto en JSON).
- `POST /lotes/:id/coa`, `GET /lotes/:id/coa`, `DELETE /lotes/:id/coa` — gestión del COA del lote.
- `GET /usuarios/me`, `PATCH /usuarios/me` — perfil del usuario autenticado.
- `POST /usuarios`, `GET /usuarios`, `PATCH /usuarios/:id/permisos` — administración de usuarios (solo admin).

## Estructura del proyecto

```
src/
├── app.controller.ts / app.module.ts / app.service.ts
├── main.ts
├── assets/                    # imágenes de fondo, fuentes, plantillas .hbs, script de impresión (.ps1)
│   ├── fonts/
│   ├── scripts/               # imprimir-etiqueta.ps1
│   └── templates/             # blanco.hbs, con-rombo.hbs, estandar.hbs, muestras.hbs
├── common/
│   ├── decorators/            # requiere-permiso.decorator.ts, roles.decorator.ts
│   └── guards/                # supabase-auth.guard.ts, permisos.guard.ts, es-admin.guard.ts, roles.guard.ts
├── config/
│   └── etiqueta.config.ts
├── etiquetas/                 # generación de la etiqueta (imagen) + impresión
│   ├── dto/
│   ├── etiqueta-generator.service.ts
│   ├── etiquetas.controller.ts / .module.ts / .service.ts
│   └── impresion.service.ts
├── fabricantes/                # CRUD fabricantes (controller, module, service, dto/)
├── lotes/                        # CRUD lotes + COA (controller, module, service, dto/)
├── plantillas/                # CRUD plantillas (controller, module, service, dto/)
├── productos/                # CRUD productos (controller, module, service, dto/)
├── usuario/                    # perfil, administración y permisos (controller, module, service, dto/)
├── prisma/                      # prisma.module.ts, prisma.service.ts
├── lib/prisma.ts
├── infrastructure/supabase/    # supabase-admin.client.ts
├── storage/                    # storage.module.ts, supabase-storage.service.ts
└── generated/prisma/          # cliente Prisma generado (incluye schema.prisma resultante)

prisma/
└── schema.prisma              # Usuario, Permiso, Fabricante, Producto, Plantilla, Lote
```

## Variables de entorno

Crea un archivo `.env` en la raíz con:

```env
DATABASE_URL=            # cadena de conexión PostgreSQL
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
PORT=3000                # opcional, por defecto 3000
EPSON_PRINTER_NAME=      # opcional, por defecto "EPSON TM-C3500 Ver2"
EPSON_PAPER_SIZE=        # opcional, por defecto "Mate Brilloso 10x6 cm"
```

## Instalación y ejecución

```bash
# instalar dependencias
npm install

# generar el cliente de Prisma (output configurado a src/generated/prisma)
npx prisma generate

# aplicar migraciones
npx prisma migrate deploy   # o migrate dev en desarrollo

# levantar en desarrollo (watch mode)
npm run start:dev

# build de producción (nest build; nest-cli.json copia generated/prisma/**/* y assets/**/* a dist/src)
npm run build
npm run start:prod

# lint / formato
npm run lint
npm run format

# tests
npm run test
npm run test:e2e
npm run test:cov
```

CORS está habilitado explícitamente para `http://localhost:3000` y `http://localhost:3001` (el frontend en desarrollo corre en el puerto 3001).

## Notas

- Puppeteer requiere las dependencias del sistema para Chromium headless; en despliegue (Docker/servidor) asegúrate de instalarlas.
- Las plantillas de etiqueta (`.hbs`) y assets (fuentes, imágenes de fondo) están en `src/assets/`; `nest-cli.json` se encarga de copiarlas al build.
- Existe un script de impresión (`src/assets/scripts/imprimir-etiqueta.ps1`) pensado para Windows + impresora térmica Epson; si falla, `ImpresionService` lanza `BadGatewayException`.
