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
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { SupabaseAuthGuard } from '../common/guards/supabase-auth.guard';
import { PermisosGuard } from '../common/guards/permisos.guard';
import { RequierePermiso } from '../common/decorators/requiere-permiso.decorator';

@Controller('productos')
@UseGuards(SupabaseAuthGuard, PermisosGuard)
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @RequierePermiso('PRODUCTOS', 'puedeCrear')
  create(@Body() dto: CreateProductoDto) {
    return this.productosService.create(dto);
  }

  @Get()
  @RequierePermiso('PRODUCTOS', 'puedeVer')
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  @RequierePermiso('PRODUCTOS', 'puedeVer')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.findOne(id);
  }

  @Patch(':id')
  @RequierePermiso('PRODUCTOS', 'puedeEditar')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductoDto) {
    return this.productosService.update(id, dto);
  }

  @Delete(':id')
  @RequierePermiso('PRODUCTOS', 'puedeEliminar')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.remove(id);
  }
}