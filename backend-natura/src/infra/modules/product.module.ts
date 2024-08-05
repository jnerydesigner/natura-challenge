import { ImageProductService } from '@application/services/image-product.service';
import { ProductService } from '@application/services/product.service';
import { ProductEntity } from '@domain/entities/product.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageProductController } from '@presenters/image-product.controller';
import { productController } from '@presenters/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [productController],
  providers: [ProductService],
})
export class ProductsModule {}
