/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppNewsController } from './app.controller';
import { AppNewsService } from './app.service';
import { Web3Service } from './blockchain/blockchain.service';

@Module({
  imports: [],
  controllers: [AppNewsController],
  providers: [AppNewsService, Web3Service],
})
export class AppNewsModule {}
