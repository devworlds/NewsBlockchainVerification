/* eslint-disable prettier/prettier */
import { PrismaService } from '../../../prisma.service';
import { Injectable } from '@nestjs/common';
import { Validator, Prisma } from '@prisma/client';

@Injectable()
export class ValidatorService {
  constructor(private prisma: PrismaService) {}

  async createValidator(data: Prisma.ValidatorCreateInput): Promise<Validator> {
    return this.prisma.validator.create({
      data,
    });
  }

}