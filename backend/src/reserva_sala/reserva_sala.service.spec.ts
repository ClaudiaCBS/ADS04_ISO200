import { Test, TestingModule } from '@nestjs/testing';
import { ReservaSalaService } from './reserva_sala.service';

describe('ReservaSalaService', () => {
  let service: ReservaSalaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservaSalaService],
    }).compile();

    service = module.get<ReservaSalaService>(ReservaSalaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
