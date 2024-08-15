import { Module } from '@nestjs/common';
import { LoansController } from './LoansController';
import { LoansService } from './LoanService';
@Module({
  controllers: [LoansController],
  providers: [LoansService],
})
export class LoansModule {}
