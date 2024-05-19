/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppNewsController } from './app.controller';
import { AppNewsService } from './app.service';

@Module({
  imports: [],
  controllers: [AppNewsController],
  providers: [AppNewsService],
})
export class AppNewsModule {}
