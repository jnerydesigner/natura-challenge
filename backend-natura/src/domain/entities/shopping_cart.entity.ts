import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCartItemsEntity } from './shopping_cart_items.entity';
import { randomUUID } from 'crypto';

@Entity({ name: 'shopping_cart' })
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'cart_id' })
  cartId: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ShoppingCartItemsEntity, (cartItem) => cartItem.shoppingCart)
  cartItems: ShoppingCartItemsEntity[];

  constructor(userId: string, cartId?: string) {
    this.userId = userId;
    this.cartId = cartId;
  }

  static createCart(userId: string): ShoppingCartEntity {
    const cartId = randomUUID();
    return new ShoppingCartEntity(userId, cartId);
  }
}
