import { HttpStatus } from '@nestjs/common';

export class ValidatePipeException {
  constructor(public statusCode: HttpStatus, public message: string, public errors: Record<string, any>) {}
}
