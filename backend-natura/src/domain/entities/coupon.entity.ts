import { randomUUID } from 'crypto';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { ShoppingCartEntity } from './shopping_cart.entity';

@Entity('coupon')
export class CouponEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'coupon_id' })
  couponId: string;

  @Column('decimal', { precision: 10, scale: 2 })
  percentage: number;

  @Column('decimal', { precision: 10, scale: 2 })
  value: number;

  @Column({ type: 'enum', enum: ['percentage', 'value'] })
  type: string;

  @Column({ name: 'coupon_code' })
  couponCode: string;

  @Column({ name: 'expiration_date' })
  expirationDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ShoppingCartEntity, (shoopingCart) => shoopingCart.coupon)
  couponProduct: ShoppingCartEntity[];

  constructor(
    percentage: number,
    value: number,
    couponCode: string,
    expirationDate: Date,
    type: 'percentage' | 'value',
    couponId?: string,
  ) {
    this.percentage = percentage;
    this.value = value;
    this.couponCode = couponCode;
    this.expirationDate = expirationDate;
    this.couponId = couponId;
    this.type = type;
  }

  static createCoupon(
    percentage: number,
    value: number,
    couponCode: string,
    expirationDate: Date,
    type: 'percentage' | 'value',
  ) {
    const couponId = randomUUID();
    return new CouponEntity(
      percentage,
      value,
      couponCode,
      expirationDate,
      type,
      couponId,
    );
  }
}
