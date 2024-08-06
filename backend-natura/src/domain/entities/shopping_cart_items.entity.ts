import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCartEntity } from './shopping_cart.entity';
import { ProductEntity } from './product.entity';
import { randomUUID } from 'crypto';

@Entity({ name: 'shopping_cart_items' })
export class ShoppingCartItemsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'cart_item_id' })
  cartItemId: string;

  @Column()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => ShoppingCartEntity, (cart) => cart.cartItems)
  shoppingCart: ShoppingCartEntity;

  @ManyToOne(() => ProductEntity, (product) => product.carItems)
  product: ProductEntity;

  constructor(
    quantity: number,
    price: number,
    product: ProductEntity,
    shoppingCart: ShoppingCartEntity,
    cartItemId?: string,
  ) {
    this.quantity = quantity;
    this.product = product;
    this.shoppingCart = shoppingCart;
    this.cartItemId = cartItemId;
    this.price = price;
  }

  static createCartItem(
    quantity: number,
    price: number,
    product: ProductEntity,
    shoppingCart: ShoppingCartEntity,
  ): ShoppingCartItemsEntity {
    const cartItemId = randomUUID();
    return new ShoppingCartItemsEntity(
      quantity,
      price,
      product,
      shoppingCart,
      cartItemId,
    );
  }
}
