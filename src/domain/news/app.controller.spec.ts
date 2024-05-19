/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppNewsController } from './app.controller';
import { AppNewsService } from './app.service';
import { NewsDTO } from './entities/news.entity.interface';

describe('AppController', () => {
  let appNewsController: AppNewsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppNewsController],
      providers: [AppNewsService],
    }).compile();

    appNewsController = app.get<AppNewsController>(AppNewsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const mockNews: NewsDTO = {
        id: 'UUID',
        title: 'Conteudo Adulto',
        content: 'secsu',
        author: 'Jefferson',
        fonts: ['http://www.secsu.com/fonts']
      }
      expect(appNewsController.CreateNews(mockNews)).toEqual(mockNews)
    });
  });
});
