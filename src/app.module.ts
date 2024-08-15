// Import the Module decorator from NestJS
import { Module } from '@nestjs/common';
// Import the controllers and services for the application
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/UsersController';
import { UsersService } from './users/UsersService';

// This line tells NestJS that this class is a module
@Module({
  // List any other modules that this module depends on (none in this case)
  imports: [],
  // List the controllers that handle incoming requests
  controllers: [AppController, UsersController],
  // List the services (providers) that provide functionality
  providers: [AppService, UsersService],
})
export class AppModule {}
