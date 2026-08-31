import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FabricantesService } from './fabricantes.service';
import { CreateFabricanteDto } from './dto/create-fabricante.dto';
import { UpdateFabricanteDto } from './dto/update-fabricante.dto';
import { SupabaseAuthGuard } from '../common/guards/supabase-auth.guard';
import { PermisosGuard } from '../common/guards/permisos.guard';
import { RequierePermiso } from '../common/decorators/requiere-permiso.decorator';

@Controller('fabricantes')
@UseGuards(SupabaseAuthGuard, PermisosGuard)
export class FabricantesController {
  constructor(private readonly fabricantesService: FabricantesService) {}

  @Post()
  @RequierePermiso('FABRICANTES', 'puedeCrear')
  create(@Body() dto: CreateFabricanteDto) {
    return this.fabricantesService.create(dto);
  }

  @Get()
  @RequierePermiso('FABRICANTES', 'puedeVer')
  findAll() {
    return this.fabricantesService.findAll();
  }

  @Get(':id')
  @RequierePermiso('FABRICANTES', 'puedeVer')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.fabricantesService.findOne(id);
  }

  @Patch(':id')
  @RequierePermiso('FABRICANTES', 'puedeEditar')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFabricanteDto) {
    return this.fabricantesService.update(id, dto);
  }

  @Delete(':id')
  @RequierePermiso('FABRICANTES', 'puedeEliminar')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fabricantesService.remove(id);
  }
}