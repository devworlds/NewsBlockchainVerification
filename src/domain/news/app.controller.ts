/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AppNewsService } from './app.service';
import { NewsDTO } from './entities/news.entity.interface';

@Controller('/news')
export class AppNewsController {
  constructor(private readonly appService: AppNewsService) {}

  @Post('create')
  CreateNews(@Body() createNewsDTO: NewsDTO): object {
    return this.appService.createNews(createNewsDTO);
  }
}