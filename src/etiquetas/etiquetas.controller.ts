import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { EtiquetasService } from './etiquetas.service';
import { GenerarEtiquetaDto } from './dto/generar-etiqueta.dto';


@Controller('etiquetas')
export class EtiquetasController {
  constructor(private readonly etiquetasService: EtiquetasService) {}

  @Post('generar')
  async generar(@Body() dto: GenerarEtiquetaDto, @Res() res: Response) {
    const imagen = await this.etiquetasService.generar(dto);
    res.setHeader('Content-Type', 'image/png');
    res.send(imagen);
  }
}