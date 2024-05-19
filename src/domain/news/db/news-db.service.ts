/* eslint-disable prettier/prettier */
import { PrismaService } from '../../../prisma.service';
import { Injectable } from '@nestjs/common';
import { News, Prisma } from '@prisma/client';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async createNews(data: Prisma.NewsCreateInput): Promise<News> {
    return this.prisma.news.create({
      data,
    });
  }

}