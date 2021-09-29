import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

export const JWTUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const http = ctx.switchToHttp();
  const request: Request = http.getRequest();
  request.user = jwt.decode(request.headers.token);
  return request.user;
});
