/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NewsDTO } from './entities/news.entity.interface';

@Injectable()
export class AppNewsService {
  createNews(newsDTO: NewsDTO): NewsDTO {
    return {
      title: newsDTO.author, 
      content: newsDTO.content, 
      author: newsDTO.author, 
      fonts: newsDTO.fonts
    };
  }
}
