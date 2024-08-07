import { CouponEntity } from '@domain/entities/coupon.entity';
import { ProductEntity } from '@domain/entities/product.entity';
import { ShoppingCartEntity } from '@domain/entities/shopping_cart.entity';
import { ShoppingCartItemsEntity } from '@domain/entities/shopping_cart_items.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class ShoppingCartSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const shoppingCart = dataSource.getRepository(ShoppingCartEntity);
    const couponEntity = dataSource.getRepository(CouponEntity);
    const shoppingCartItensEntity = dataSource.getRepository(
      ShoppingCartItemsEntity,
    );
    const productEntity = dataSource.getRepository(ProductEntity);

    const cart = {
      cartId: '0bdb549a-d967-4dd9-bafe-f1acb7d6a54f',
      userId: '903a1730-29af-4a1a-b1b3-de10cb688014',
    };

    const product = await productEntity.find();

    const shoppingCartItens = [
      {
        productId: product[0].productId,
        quantity: 1,
        cartId: cart.cartId,
        price: product[0].price,
      },
    ];

    const cartCreate = shoppingCart.create(cart);

    const coupon = couponEntity.create({
      couponCode: 'NATURALFOOD',
      expirationDate: new Date('2022-12-31'),
      percentage: 0,
      type: 'percentage',
      value: 0,
    });

    cartCreate.coupon = coupon;
    await shoppingCart.save(cartCreate);

    for await (const item of shoppingCartItens) {
      const cartItemCreate = shoppingCartItensEntity.create(item);
      cartItemCreate.product = product[0];

      await shoppingCartItensEntity.save(cartItemCreate);
      cartCreate.cartItems = [cartItemCreate];

      await shoppingCart.save(cartCreate);
    }
  }
}
