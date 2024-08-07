import { UserEntity } from '@domain/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

const user = {
  userId: '903a1730-29af-4a1a-b1b3-de10cb688014',
  username: 'John Doe',
  email: 'john.doe@email.com',
  password: '$2b$10$NwwLnP0Q/pDC7lpoQAS68Oggwmj3CayftfzCPK..sywOHVnNj2Bsu',
  createdAt: '2024-08-04T20:34:43.560Z',
  updatedAt: '2024-08-04T20:34:43.560Z',
};

export class UserSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(UserEntity);

    const userCreate = userRepository.create(user);
    await userRepository.save(userCreate);
  }
}
