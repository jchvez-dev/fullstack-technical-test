import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    const expectedToken = process.env.AUTH_TOKEN || 'mi-token-secreto-123';

    if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
      throw new UnauthorizedException('Token inválido o no proporcionado.');
    }

    return true;
  }
}
