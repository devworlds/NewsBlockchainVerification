/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ValidatorDTO } from './entities/validator.entity.interface'

@Injectable() export class AppValidatorService {
  createValidator(validatorDTO: ValidatorDTO): ValidatorDTO {
    const created: ValidatorDTO = {
      id: validatorDTO.id,
      firstName: validatorDTO.firstName, 
      lastName: validatorDTO.lastName, 
      wallet: validatorDTO.wallet
    }
    return created
  }
}
