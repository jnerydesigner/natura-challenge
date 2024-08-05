import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { AuthService } from '@application/services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@domain/entities/user.entity';
import { AuthController } from '@presenters/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from '@infra/constants/jwt.constant';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([UserEntity]),
    UsersModule,
  ],
  providers: [AuthService, AuthService, JwtService],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule {}
