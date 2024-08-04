import { UserService } from '@application/services/user.service';
import { UserEntity } from '@domain/entities/user.entity';
import { UserRepository } from '@infra/database/user.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '@presenters/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UsersModule {}
