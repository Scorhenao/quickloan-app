// Import the Module decorator from NestJS
import { Module } from '@nestjs/common';
// Import the LoansController and LoansService
import { LoansController } from './LoansController';
import { LoansService } from './LoanService';

// This line tells NestJS that this class is a module
@Module({
  // List the controllers for this module
  controllers: [LoansController],
  // List the services (providers) for this module
  providers: [LoansService],
})
export class LoansModule {}
