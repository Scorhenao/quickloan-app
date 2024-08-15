// Import the Controller decorator from NestJS
import { Controller } from '@nestjs/common';

// This line tells NestJS that this class is a controller for handling user requests
@Controller('users')
export class UsersController {}
