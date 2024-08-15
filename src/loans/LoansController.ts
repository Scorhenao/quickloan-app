// Import necessary parts from NestJS
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LoansService } from './LoanService';

// This line tells NestJS that this class is a controller for handling loan requests
@Controller('loans')
export class LoansController {
  // The constructor gets an instance of LoansService
  constructor(private readonly loansService: LoansService) {}

  // This function handles POST requests to create a new loan
  @Post()
  createLoan(@Body() createLoanDto: any) {
    // Use the LoansService to calculate the risk of the loan
    const risk = this.loansService.calculateLoanRisk(createLoanDto);
    // Return a message with the risk level of the loan
    return `Loan created with ${risk} risk`;
  }

  // This function handles GET requests to get the status of a loan by its ID
  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    // Return a message with the status of the loan
    return `Status of loan ${id}`;
  }
}
