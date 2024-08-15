// Import the Controller and Get decorators from NestJS
import { Controller, Get } from '@nestjs/common';

// This line tells NestJS that this class is a controller
@Controller()
export class AppController {
  // This function handles GET requests to the root route
  @Get()
  getHello(): string {
    // Return the message 'Hello World!'
    return 'Hello World!';
  }
}
