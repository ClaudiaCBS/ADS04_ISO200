import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservaSalaService } from './reserva_sala.service';
import { CreateReservaSalaDto } from './dto/create-reserva_sala.dto';


@Controller('reserva-sala')
export class ReservaSalaController {
  constructor(private readonly reservaSalaService: ReservaSalaService) {}

  @Post()
  create(@Body() createReservaSalaDto: CreateReservaSalaDto) {
    return this.reservaSalaService.create(createReservaSalaDto);
  }

  @Get()
  findAll() {
    return this.reservaSalaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservaSalaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservaSalaDto: CreateReservaSalaDto) {
    return this.reservaSalaService.update(+id, updateReservaSalaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservaSalaService.remove(+id);
  }
}
