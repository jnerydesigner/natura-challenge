import { ProductTypeormDto } from '@application/dtos/product-typeorm.dto';
import { ProductEntity } from '@domain/entities/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  async findAll() {
    return this.productRepository.find({
      relations: {
        productImage: true,
      },
    });
  }

  async create(product: ProductTypeormDto) {
    const productCreate = ProductEntity.createProduct(
      product.name,
      product.description,
      product.price,
    );

    const productCreateInstance = this.productRepository.create(productCreate);

    return this.productRepository.save(productCreateInstance);
  }
}
