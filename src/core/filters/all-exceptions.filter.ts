import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { ValidatePipeException } from '../exceptions';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let statusCode;
    let message;

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      message = exception.message;
    } else if (exception instanceof ValidatePipeException) {
      statusCode = exception.statusCode;
      message = { issue: exception.message, errors: exception.errors };
    } else {
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
    }

    response.status(statusCode).json({
      statusCode,
      message,
      path: request.url,
    });
  }
}
