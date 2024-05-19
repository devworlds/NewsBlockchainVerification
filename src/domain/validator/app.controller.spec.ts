/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppValidatorController } from './app.controller';
import { AppValidatorService } from './app.service';
import { ValidatorDTO } from './entities/validator.entity.interface';

describe('AppController', () => {
  let appValidatorController: AppValidatorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppValidatorController],
      providers: [AppValidatorService],
    }).compile();

    appValidatorController = app.get<AppValidatorController>(AppValidatorController);
  });

  describe('root', () => {
    it('should return !"', () => {
      const mockValidator: ValidatorDTO = {
        firstName: 'Jefferson',
        lastName: 'Luiz',
        wallet: '0x1'
      }
      expect(appValidatorController.CreateValidator(mockValidator)).toEqual(mockValidator)
    });
  });
});
