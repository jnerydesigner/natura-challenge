import { UserRequerstDTO } from '@application/dtos/user-request.dto';
import { UserEntity } from '@domain/entities/user.entity';
import { UserRepository } from '@infra/database/user.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userRequest: UserRequerstDTO) {
    const user = await UserEntity.createUser(
      userRequest.username,
      userRequest.email,
      await this.hashPassword(userRequest.password),
    );

    await this.userRepository.store(user);
  }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
  }

  async validatePassword(
    password: string,
    passwordHash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}
