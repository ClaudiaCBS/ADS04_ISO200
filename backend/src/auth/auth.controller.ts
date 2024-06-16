import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService : AuthService){}

    @Post('login')
    async signIn (@Body() sign : signDto) {
        return await this.authService.signIn (sign.email, sign.senha)
    }
}
