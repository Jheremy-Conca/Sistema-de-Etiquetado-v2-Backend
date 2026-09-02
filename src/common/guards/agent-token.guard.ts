import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class AgentTokenGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token: string | undefined = request.headers['x-agent-token'];
    const esperado = process.env.AGENT_TOKEN;

    if (!esperado) throw new UnauthorizedException('AGENT_TOKEN no configurado en el servidor');
    if (!token || token.length !== esperado.length || !timingSafeEqual(Buffer.from(token), Buffer.from(esperado))) {
      throw new UnauthorizedException('Token de agente inválido');
    }
    return true;
  }
}