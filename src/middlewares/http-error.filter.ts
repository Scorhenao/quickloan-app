// This code helps handle errors in a NestJS application

// Import necessary parts from NestJS
// eslint-disable-next-line prettier/prettier
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

// This line tells NestJS to catch HttpException errors
@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  // This function handles the error when it happens
  catch(exception: HttpException, host: ArgumentsHost) {
    // Get the HTTP context from the host
    const ctx = host.switchToHttp();
    // Get the response object
    const response = ctx.getResponse();
    // Get the status code from the exception
    const status = exception.getStatus();

    // Send the response with the status code and message
    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
