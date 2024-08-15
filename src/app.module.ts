import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoansModule } from './loans/loans.module';
import { LoansModuleModule } from './LoansModule/loans-module.module';
import { UsersModuleModule } from './UsersModule/users-module.module';
import { LoansController } from './loans/loans.controller';
import { LoansControllerController } from './LoansController/loans-controller.controller';
import { LoansServiceService } from './LoansService/loans-service.service';

@Module({
  imports: [LoansModule, LoansModuleModule, UsersModuleModule],
  controllers: [AppController, LoansController, LoansControllerController],
  providers: [AppService, LoansServiceService],
})
export class AppModule {}
