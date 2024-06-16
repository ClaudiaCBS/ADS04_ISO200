import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UsuarioEntity } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor (private readonly userService : UsuarioService, private readonly jwtService : JwtService){}

    async signIn (email : string, senha: string){
        const user : UsuarioEntity = await this.userService.findOneByEmail(email)

        if (user) {
            if (user.senha != senha) {
                throw new UnauthorizedException()
            }
            const payload = {email : email}
            return {access_token : await this.jwtService.signAsync(payload, {secret: process.env.TOKEN_JWT})}
        }
    }
}
