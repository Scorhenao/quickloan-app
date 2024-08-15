// Import the Module decorator from NestJS
import { Module } from '@nestjs/common';
// Import the UsersController and UsersService
import { UsersController } from './UsersController';
import { UsersService } from './UsersService';

// This line tells NestJS that this class is a module
@Module({
  // List the controllers for this module
  controllers: [UsersController],
  // List the services (providers) for this module
  providers: [UsersService],
})
export class UsersModule {}
