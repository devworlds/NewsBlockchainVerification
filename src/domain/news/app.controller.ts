/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post, Patch, Get } from '@nestjs/common';
import  { NewsService }  from './db/news-db.service';
import { News as NewsModel} from '@prisma/client';
import { NewsDTO } from './entities/news.entity.interface';
import { Web3Service } from './blockchain/blockchain.service';

@Controller('/news')
export class AppNewsController {
  constructor(
    private readonly newsService: NewsService,
    private readonly web3Service: Web3Service
  ) {}

  @Post('create')
  CreateNews(@Body() createNewsDTO: NewsDTO): Promise<NewsModel> {
    const {id, title, content, author, verified } = createNewsDTO
    const created =  this.newsService.createNews({
      id,
      title,
      content,
      author,
      verified
    });
    return created
  }

  @Patch('/:newsId/verify')
  async VerifyNews(@Param("newsId") newsId: string): Promise<object>{
    return await this.web3Service.addNewsToValidate(newsId)
  }

  @Get('getBlock')
  GetBlock(): Promise<bigint>{
    return this.web3Service.getBlockNumber()
  }
}