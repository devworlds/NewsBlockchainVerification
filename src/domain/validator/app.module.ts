/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppValidatorController } from './app.controller';
import { AppValidatorService } from './app.service';

@Module({
  imports: [],
  controllers: [AppValidatorController],
  providers: [AppValidatorService],
})
export class AppValidatorDbModule {}
