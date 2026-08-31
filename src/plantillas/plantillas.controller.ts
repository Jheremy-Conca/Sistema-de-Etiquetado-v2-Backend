import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PlantillasService } from './plantillas.service';
import { CreatePlantillaDto } from './dto/create-plantilla.dto';
import { UpdatePlantillaDto } from './dto/update-plantilla.dto';
import { SupabaseAuthGuard } from '../common/guards/supabase-auth.guard';
import { PermisosGuard } from '../common/guards/permisos.guard';
import { RequierePermiso } from '../common/decorators/requiere-permiso.decorator';

@Controller('plantillas')
@UseGuards(SupabaseAuthGuard, PermisosGuard)
export class PlantillasController {
  constructor(private readonly plantillasService: PlantillasService) {}

  @Post()
  @RequierePermiso('PLANTILLAS', 'puedeCrear')
  create(@Body() dto: CreatePlantillaDto) {
    return this.plantillasService.create(dto);
  }

  @Get()
  @RequierePermiso('PLANTILLAS', 'puedeVer')
  findAll(@Query('activas') activas?: string) {
    return this.plantillasService.findAll(activas === 'true');
  }

  @Get(':id')
  @RequierePermiso('PLANTILLAS', 'puedeVer')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plantillasService.findOne(id);
  }

  @Patch(':id')
  @RequierePermiso('PLANTILLAS', 'puedeEditar')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePlantillaDto) {
    return this.plantillasService.update(id, dto);
  }

  @Delete(':id')
  @RequierePermiso('PLANTILLAS', 'puedeEliminar')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.plantillasService.remove(id);
  }
}