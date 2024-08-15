import { Test, TestingModule } from '@nestjs/testing';
import { LoansServiceService } from './loans-service.service';

describe('LoansServiceService', () => {
  let service: LoansServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoansServiceService],
    }).compile();

    service = module.get<LoansServiceService>(LoansServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
