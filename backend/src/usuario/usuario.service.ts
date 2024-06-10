import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    readonly usuarioRepository : Repository<UsuarioEntity>
  ){}
  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioRepository.save(createUsuarioDto);
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number) {
    return await this.usuarioRepository.findOneBy({id : id});
  }

  async update(id: number, usuario : CreateUsuarioDto) {
    const newUsuario = await this.findOne(id)
    newUsuario.nome = usuario.nome
    newUsuario.senha = usuario.senha
    return await this.usuarioRepository.update(id, newUsuario);
  }

  async remove(id: number) {
    return await this.usuarioRepository.delete(id);
  }
}
