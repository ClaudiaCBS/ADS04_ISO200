import { Injectable } from '@nestjs/common';
import { CreateReservaSalaDto } from './dto/create-reserva_sala.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservaSalaEntity } from './entities/reserva_sala.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservaSalaService {
  constructor(
    @InjectRepository(ReservaSalaEntity)
    readonly reservaSalaRepository : Repository<ReservaSalaEntity>
  ){}
  async create(createReservaSalaDto: CreateReservaSalaDto) {
    return await this.reservaSalaRepository.save(createReservaSalaDto);
  }

  async findAll() {
    return await this.reservaSalaRepository.find();
  }

  async findOne(id: number) {
    return await this.reservaSalaRepository.findOneBy({id : id});
  }

  async update(id: number, reserva_sala : CreateReservaSalaDto) {
    const newReservaSala = await this.findOne(id)
    newReservaSala.nomeSala = reserva_sala.nomeSala
    newReservaSala.localSala = reserva_sala.localSala
    newReservaSala.dataUso = reserva_sala.dataUso
    newReservaSala.horaInicio = reserva_sala.horaInicio
    newReservaSala.horaFinal = reserva_sala.horaFinal
    newReservaSala.nomeResponsavel = reserva_sala.nomeResponsavel
    newReservaSala.motivoUso = reserva_sala.motivoUso
    newReservaSala.informacaoGeral = reserva_sala.informacaoGeral
    newReservaSala.convidados = reserva_sala.convidados

    return await this.reservaSalaRepository.update(id, newReservaSala);
  }

  async remove(id: number) {
    return await this.reservaSalaRepository.delete(id);
  }
}
