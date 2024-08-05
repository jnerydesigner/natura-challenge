import { UserRequerstDTO } from '@application/dtos/user-request.dto';
import { UserEntity } from '@domain/entities/user.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(userRequest: UserRequerstDTO) {
    const user = UserEntity.createUser(
      userRequest.username,
      userRequest.email,
      await this.hashPassword(userRequest.password),
    );

    const userExists = await this.userRepository.findOne({
      where: {
        email: user.email,
      },
    });

    if (userExists) {
      return {
        message: 'User already exists',
      };
    }

    const userCreate = this.userRepository.create(user);
    await this.userRepository.save(userCreate);
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

  findAll() {
    return this.userRepository.find();
  }

  async findOneUser(username: string) {
    return this.userRepository.findOne({
      where: {
        email: username,
      },
    });
  }
}
