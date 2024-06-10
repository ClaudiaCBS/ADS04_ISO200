import { Test, TestingModule } from '@nestjs/testing';
import { ReservaSalaController } from './reserva_sala.controller';
import { ReservaSalaService } from './reserva_sala.service';

describe('ReservaSalaController', () => {
  let controller: ReservaSalaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservaSalaController],
      providers: [ReservaSalaService],
    }).compile();

    controller = module.get<ReservaSalaController>(ReservaSalaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
