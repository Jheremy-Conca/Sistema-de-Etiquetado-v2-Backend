import { Controller, Post, Get, Patch, Param, ParseIntPipe, Body, UseGuards, Req } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { crearUsuarioSchema, CrearUsuarioDto } from './dto/usuarios.dto';
import { actualizarPermisosSchema, ActualizarPermisosDto } from './dto/actualizar-permisos.dto';
import { actualizarPerfilSchema, ActualizarPerfilDto } from './dto/actualizar-perfil.dto';
import { SupabaseAuthGuard } from '../common/guards/supabase-auth.guard';
import { EsAdminGuard } from '../common/guards/es-admin.guard';

// NOTA: los guards ahora se aplican por método, no a nivel de clase.
// Motivo: /me debe ser accesible para cualquier usuario autenticado
// (para que el frontend sepa si es Admin), mientras que el resto de
// los endpoints son exclusivos de Admin.
// IMPORTANTE: cualquier endpoint nuevo que se agregue a este controller
// necesita su propio @UseGuards(...) explícito — ya no hereda nada por
// estar en esta clase.
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get('me')
  @UseGuards(SupabaseAuthGuard)
  async obtenerActual(@Req() req: any) {
    // SupabaseAuthGuard ya deja el usuario (con sus permisos) en request.usuario
    return { success: true, data: req.usuario };
  }

  @Patch('me')
  @UseGuards(SupabaseAuthGuard) // sin EsAdminGuard: cualquiera edita su propio perfil
  async actualizarMiPerfil(@Req() req: any, @Body() body: unknown) {
    const dto: ActualizarPerfilDto = actualizarPerfilSchema.parse(body);
    const usuario = await this.usuariosService.actualizarPerfil(req.usuario.id, dto);
    return { success: true, data: usuario };
  }

  @Post()
  @UseGuards(SupabaseAuthGuard, EsAdminGuard)
  async crear(@Body() body: unknown) {
    const dto: CrearUsuarioDto = crearUsuarioSchema.parse(body);
    const usuario = await this.usuariosService.crear(dto);
    return { success: true, data: usuario };
  }

  @Get()
  @UseGuards(SupabaseAuthGuard, EsAdminGuard)
  async listar() {
    const usuarios = await this.usuariosService.listar();
    return { success: true, data: usuarios };
  }

  @Patch(':id/permisos')
  @UseGuards(SupabaseAuthGuard, EsAdminGuard)
  async actualizarPermisos(@Param('id', ParseIntPipe) id: number, @Body() body: unknown) {
    const dto: ActualizarPermisosDto = actualizarPermisosSchema.parse(body);
    const usuario = await this.usuariosService.actualizarPermisos(id, dto.permisos);
    return { success: true, data: usuario };
  }
}