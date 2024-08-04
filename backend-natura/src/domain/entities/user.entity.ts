import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCartEntity } from './shopping_cart.entity';
import { OrderEntity } from './order.entity';
import { randomUUID } from 'crypto';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => ShoppingCartEntity)
  @JoinTable()
  shoppingCart: ShoppingCartEntity;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];

  static createUser(
    username: string,
    email: string,
    password: string,
  ): UserEntity {
    const user = new UserEntity();
    user.userId = randomUUID();
    user.username = username;
    user.email = email;
    user.password = password;
    return user;
  }
}
