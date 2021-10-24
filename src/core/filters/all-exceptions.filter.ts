import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, ServiceUnavailableException } from '@nestjs/common';
import { ValidatePipeException } from '../exceptions';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof ServiceUnavailableException) {
      return response.status(exception.getStatus()).json(exception.getResponse());
    }

    if (exception instanceof HttpException) {
      return response.status(exception.getStatus()).json({ statusCode: exception.getStatus(), message: exception.message });
    }

    if (exception instanceof ValidatePipeException) {
      return response.status(exception.statusCode).json({
        statusCode: exception.statusCode,
        message: exception.message,
        errors: exception.errors,
      });
    }

    response.status(500).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
      path: request.url,
    });
  }
}
