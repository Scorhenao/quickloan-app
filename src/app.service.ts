// Import the Injectable decorator from NestJS
import { Injectable } from '@nestjs/common';

// This line tells NestJS that this class is a service that can be used in other parts of the application
@Injectable()
export class AppService {
  // This function returns a simple string message
  getHello(): string {
    // Return the message 'Hello World!'
    return 'Hello World!';
  }
}
