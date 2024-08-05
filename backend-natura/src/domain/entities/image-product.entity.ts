import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

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
}
