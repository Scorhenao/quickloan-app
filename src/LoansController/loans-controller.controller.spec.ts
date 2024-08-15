import { Test, TestingModule } from '@nestjs/testing';
import { LoansControllerController } from './loans-controller.controller';

describe('LoansControllerController', () => {
  let controller: LoansControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoansControllerController],
    }).compile();

    controller = module.get<LoansControllerController>(LoansControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
