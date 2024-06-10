import { Module } from '@nestjs/common';
import { ReservaSalaService } from './reserva_sala.service';
import { ReservaSalaController } from './reserva_sala.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaSalaEntity } from './entities/reserva_sala.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaSalaEntity])],
  controllers: [ReservaSalaController],
  providers: [ReservaSalaService],
})
export class ReservaSalaModule {}
