/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import  { NewsService }  from './db/news-db.service';
import { News as NewsModel} from '@prisma/client';
import { NewsDTO } from './entities/news.entity.interface';

@Controller('/news')
export class AppNewsController {
  constructor(
    private readonly newsService: NewsService,
  ) {}

  @Post('create')
  CreateNews(@Body() createNewsDTO: NewsDTO): Promise<NewsModel> {
    const {id, title, content, author } = createNewsDTO
    const created =  this.newsService.createNews({
      id,
      title,
      content,
      author
    });
    return created
  }
}