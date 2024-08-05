import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { randomUUID } from 'crypto';

@Entity({ name: 'image_product' })
export class ImageProductEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'iamge_product_id' })
  imageProductId: string;

  @Column()
  imageUrl: string;

  @Column()
  isPricipalImageProduct: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => ProductEntity, (product) => product.productImage)
  product: ProductEntity;

  constructor(
    imageUrl: string,
    isPricipalImageProduct: boolean,
    product: ProductEntity,
    imageProductId?: string,
  ) {
    this.imageUrl = imageUrl;
    this.isPricipalImageProduct = isPricipalImageProduct;
    this.product = product;
  }

  static createProductImage(
    imageUrl: string,
    isPricipalImageProduct: boolean,
    product: ProductEntity,
  ) {
    const imageProductId = randomUUID();
    return new ImageProductEntity(
      imageUrl,
      isPricipalImageProduct,
      product,
      imageProductId,
    );
  }
}
