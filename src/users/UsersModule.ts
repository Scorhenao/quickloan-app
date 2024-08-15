import { Module } from '@nestjs/common';
import { UsersController } from './UsersController';
import { UsersService } from './UsersService';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
