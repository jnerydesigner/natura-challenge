import { UserEntity } from '@domain/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async findAll() {
    return this.find();
  }

  async findById(id: string) {
    return this.findOne({
      where: {
        userId: id,
      },
    });
  }

  async store(user: UserEntity) {
    const userCreate = this.create(user);
    await this.save(userCreate);
  }
}
