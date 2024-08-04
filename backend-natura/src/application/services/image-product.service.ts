import { ImageProductTypeormDto } from '@application/dtos/product-typeorm.dto';
import { ImageProductEntity } from '@domain/entities/image-product.entity';
import { ProductEntity } from '@domain/entities/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImageProductService {
  constructor(
    @InjectRepository(ImageProductEntity)
    private readonly imageProductRepository: Repository<ImageProductEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  async create(productId: string, input: ImageProductTypeormDto) {
    const product = await this.productRepository.findOne({
      where: {
        productId,
      },
    });
    const productImageCreate = this.imageProductRepository.create({
      imageUrl: input.imageUrl,
      isPricipalImageProduct: input.isPricipalImageProduct,
      product,
    });

    await this.imageProductRepository.save(productImageCreate);
  }
}
