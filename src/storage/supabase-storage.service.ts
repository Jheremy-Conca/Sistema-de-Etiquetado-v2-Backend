import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';


@Injectable()
export class SupabaseStorageService {
  private readonly client: SupabaseClient;
  private readonly bucket = 'coas'
  private readonly bucketTrabajos = 'trabajos-impresion';



  constructor() {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error(
        'Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en las variables de entorno',
      );
    }

    this.client = createClient(url, key);
  }

  async uploadCoa(loteId: number, file: Express.Multer.File): Promise<string> {
    const path = `lote-${loteId}/${Date.now()}-${file.originalname}`;

    const { error } = await this.client.storage
      .from(this.bucket)
      .upload(path, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    if (error) {
      throw new InternalServerErrorException(`Error subiendo COA: ${error.message}`);
    }
    return path;
  }

  async deleteCoa(path: string): Promise<void> {
    const { error } = await this.client.storage.from(this.bucket).remove([path]);
    if (error) {
      throw new InternalServerErrorException(`Error eliminando COA: ${error.message}`);
    }
  }

  async getSignedUrl(path: string, expiresInSeconds = 300): Promise<string> {
    const { data, error } = await this.client.storage
      .from(this.bucket)
      .createSignedUrl(path, expiresInSeconds);

    if (error || !data) {
      throw new InternalServerErrorException(`Error generando signed URL: ${error?.message}`);
    }
    return data.signedUrl;
  }

async uploadTrabajoImpresion(imagen: Buffer): Promise<string> {
  const path = `${Date.now()}-${randomUUID()}.png`;
  const { error } = await this.client.storage
    .from(this.bucketTrabajos)
    .upload(path, imagen, { contentType: 'image/png', upsert: false });
  if (error) throw new InternalServerErrorException(`Error subiendo trabajo de impresión: ${error.message}`);
  return path;
}

async deleteTrabajoImpresion(path: string): Promise<void> {
  const { error } = await this.client.storage.from(this.bucketTrabajos).remove([path]);
  if (error) throw new InternalServerErrorException(`Error eliminando trabajo de impresión: ${error.message}`);
}

async getSignedUrlTrabajoImpresion(path: string, expiresInSeconds = 600): Promise<string> {
  const { data, error } = await this.client.storage
    .from(this.bucketTrabajos)
    .createSignedUrl(path, expiresInSeconds);
  if (error || !data) throw new InternalServerErrorException(`Error generando signed URL: ${error?.message}`);
  return data.signedUrl;
}

  
}