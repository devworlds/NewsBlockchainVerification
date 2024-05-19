/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { ValidatorDTO } from './entities/validator.entity.interface';
import { Validator as ValidatorModel} from '@prisma/client';
import { ValidatorService } from './db/validator-db.service';

@Controller('/validator')
export class AppValidatorController {
  constructor(private readonly validatorService: ValidatorService) {}

  @Post('create')
  CreateValidator(@Body() createValidatorDTO: ValidatorDTO): Promise<ValidatorModel> {
    const {id, firstName, lastName, wallet} = createValidatorDTO
    const created =  this.validatorService.createValidator({
      id,
      firstName,
      lastName,
      wallet
    });
    return created
  }
}