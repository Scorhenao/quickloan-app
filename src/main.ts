// Import necessary functions and classes from NestJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpErrorFilter } from './middlewares/http-error.filter';

// This function starts the application
async function bootstrap() {
  // Create an instance of the application using AppModule
  const app = await NestFactory.create(AppModule);
  // Set up global validation for incoming request data
  app.useGlobalPipes(new ValidationPipe());
  // Set up global error handling for HTTP errors
  app.useGlobalFilters(new HttpErrorFilter());
  // Make the application listen on port 3000
  await app.listen(3000);
}

// Call the bootstrap function to start the application
bootstrap();
