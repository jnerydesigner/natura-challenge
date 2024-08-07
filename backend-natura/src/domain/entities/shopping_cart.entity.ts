import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCartItemsEntity } from './shopping_cart_items.entity';
import { randomUUID } from 'crypto';
import { CouponEntity } from './coupon.entity';

@Entity({ name: 'shopping_cart' })
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'cart_id' })
  cartId: string;

  @Column()
  userId: string;

  @ManyToOne(() => CouponEntity, (coupon) => coupon.couponProduct)
  coupon: CouponEntity;

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
