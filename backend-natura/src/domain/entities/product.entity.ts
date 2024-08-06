import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItemsEntity } from './order_items.entity';
import { ShoppingCartItemsEntity } from './shopping_cart_items.entity';
import { ImageProductEntity } from './image-product.entity';
import { randomUUID } from 'crypto';

@Entity({ name: 'products' })
export class ProductEntity {
  constructor(
    name: string,
    description: string,
    price: number,
    productId: string,
  ) {
    this.productId = productId;
    this.name = name;
    this.description = description;
    this.price = price;
  }
  @PrimaryGeneratedColumn('uuid', { name: 'product_id' })
  productId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 2, scale: 1, default: 0 })
  rating: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => OrderItemsEntity, (orderItem) => orderItem.product)
  orderItems: OrderItemsEntity[];

  @OneToMany(() => ImageProductEntity, (imageProduct) => imageProduct.product)
  productImage: ImageProductEntity[];

  @OneToMany(
    () => ShoppingCartItemsEntity,
    (shoppingItems) => shoppingItems.product,
  )
  carItems: ShoppingCartItemsEntity[];

  static createProduct(name: string, description: string, price: number) {
    const productId = randomUUID();
    return new ProductEntity(name, description, price, productId);
  }
}
