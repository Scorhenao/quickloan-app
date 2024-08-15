import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('loans')
export class LoansController {
  @Post()
  createLoan(@Body() createLoanDto: any) {
    return 'Loan created';
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return `Status of loan ${id}`;
  }
}