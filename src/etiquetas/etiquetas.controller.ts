import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { EtiquetasService } from './etiquetas.service';
import { GenerarEtiquetaDto } from './dto/generar-etiqueta.dto';
import { SupabaseAuthGuard } from '../common/guards/supabase-auth.guard';
import { PermisosGuard } from '../common/guards/permisos.guard';
import { RequierePermiso } from '../common/decorators/requiere-permiso.decorator';


@Controller('etiquetas')
@UseGuards(SupabaseAuthGuard, PermisosGuard)
export class EtiquetasController {
  constructor(private readonly etiquetasService: EtiquetasService) {}

  @Post('generar')
  @RequierePermiso('ETIQUETAS', 'puedeCrear')
  async generar(@Body() dto: GenerarEtiquetaDto, @Res() res: Response) {
    const imagen = await this.etiquetasService.generar(dto);
    res.setHeader('Content-Type', 'image/png');
    res.send(imagen);
  }
}