import { ImageProductService } from '@application/services/image-product.service';
import { ImageProductEntity } from '@domain/entities/image-product.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageProductController } from '@presenters/image-product.controller';
import { ProductEntity } from '@domain/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageProductEntity, ProductEntity])],
  controllers: [ImageProductController],
  providers: [ImageProductService],
})
export class ImageProductModule {}
