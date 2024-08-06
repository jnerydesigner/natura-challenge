import { ShoppingCartService } from '@application/services/shopping-cart.service';
import { ProductEntity } from '@domain/entities/product.entity';
import { ShoppingCartEntity } from '@domain/entities/shopping_cart.entity';
import { ShoppingCartItemsEntity } from '@domain/entities/shopping_cart_items.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCartController } from '@presenters/shopping-cart.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ShoppingCartEntity,
      ShoppingCartItemsEntity,
      ProductEntity,
    ]),
  ],
  providers: [ShoppingCartService],
  exports: [ShoppingCartService],
  controllers: [ShoppingCartController],
})
export class ShoppingCartModule {}
