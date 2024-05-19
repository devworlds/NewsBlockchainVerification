/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppNewsService } from './domain/news/app.service';
import { AppNewsController } from './domain/news/app.controller';
import { AppValidatorController } from './domain/validator/app.controller';
import { AppValidatorService } from './domain/validator/app.service';

@Module({
  imports: [],
  controllers: [
    AppController, 
    AppNewsController, 
    AppValidatorController
  ],
  providers: [
    AppService, 
    AppNewsService,
    AppValidatorService
  ],
})
export class AppModule {}