/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AppValidatorService } from './app.service';
import { ValidatorDTO } from './entities/validator.entity.interface';

@Controller('/validator')
export class AppValidatorController {
  constructor(private readonly appService: AppValidatorService) {}

  @Post('create')
  CreateValidator(@Body() createValidatorDTO: ValidatorDTO): ValidatorDTO {
    return this.appService.createValidator(createValidatorDTO);
  }
}