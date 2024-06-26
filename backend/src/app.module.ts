import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ReservaSalaModule } from './reserva_sala/reserva_sala.module';
import { ImagemModule } from './imagem/imagem.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), UsuarioModule, ReservaSalaModule, ImagemModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
