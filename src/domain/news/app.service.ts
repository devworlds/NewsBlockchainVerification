/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NewsDTO } from './entities/news.entity.interface';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppNewsService {
  createNews(newsDTO: NewsDTO): Prisma.NewsCreateInput {
    return {
      id: newsDTO.id,
      title: newsDTO.author, 
      content: newsDTO.content, 
      author: newsDTO.author,
    };
  }
}
