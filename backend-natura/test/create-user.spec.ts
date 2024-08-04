import { UserEntity } from '@domain/entities/user.entity';

describe('Create User', () => {
  it('should create a new user', async () => {
    const user = await UserEntity.createUser(
      'John Doe',
      'john.doe@email.com',
      'password',
    );

    expect(user.username).toBe('John Doe');
  });
});
