import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const http = context.switchToHttp();
    const request: Request = http.getRequest();

    if (!request.headers.token) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    } else {
      // TODO: Check is user exists in db
    }

    return true;
  }
}
