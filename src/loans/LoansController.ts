import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LoansService } from './LoanService';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  createLoan(@Body() createLoanDto: any) {
    // Usar el servicio para calcular el riesgo del préstamo
    const risk = this.loansService.calculateLoanRisk(createLoanDto);
    return `Loan created with ${risk} risk`;
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return `Status of loan ${id}`;
  }
}
