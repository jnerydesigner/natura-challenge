import { CouponEntity } from '@domain/entities/coupon.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

enum CouponTypeEnum {
  PERCENTAGE = 'percentage',
  VALUE = 'value',
}

const coupons = [
  {
    percentage: 12,
    value: 0,
    couponCode: 'NATURALFOOD',
    expirationDate: new Date('2022-12-31'),
    type: CouponTypeEnum.PERCENTAGE,
  },
  {
    percentage: 0,
    value: 20,
    couponCode: 'DIASDOSPAIS100',
    expirationDate: new Date('2022-12-31'),
    type: CouponTypeEnum.VALUE,
  },
  {
    percentage: 20,
    value: 0,
    couponCode: 'NATURAMEDAUMEMPREGO',
    expirationDate: new Date('2022-12-31'),
    type: CouponTypeEnum.PERCENTAGE,
  },
];

export class CouponSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const couponRepository = dataSource.getRepository(CouponEntity);

    const coupon = CouponEntity.createCoupon(
      10,
      10,
      '10OFF',
      new Date('2022-12-31'),
      'percentage',
    );

    for await (const coupon of coupons) {
      const couponCreateEntity = CouponEntity.createCoupon(
        coupon.percentage,
        coupon.value,
        coupon.couponCode,
        coupon.expirationDate,
        coupon.type,
      );
      const couponCreate = couponRepository.create(couponCreateEntity);
      await couponRepository.save(couponCreate);
    }
  }
}
