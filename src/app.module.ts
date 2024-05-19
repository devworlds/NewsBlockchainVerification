/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppNewsService } from './domain/news/app.service';
import { AppNewsController } from './domain/news/app.controller';
import { AppValidatorController } from './domain/validator/app.controller';
import { AppValidatorService } from './domain/validator/app.service';
import { PrismaService } from './prisma.service';
import { NewsService } from './domain/news/db/news-db.service';
import { ValidatorService } from './domain/validator/db/validator-db.service';

@Module({
  imports: [
  ],
  controllers: [
    AppController, 
    AppNewsController, 
    AppValidatorController
  ],
  providers: [
    ValidatorService,
    NewsService,
    PrismaService,
    AppService, 
    AppNewsService,
    AppValidatorService
  ],

})
export class AppModule {}