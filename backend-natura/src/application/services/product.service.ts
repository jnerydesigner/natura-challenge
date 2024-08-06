import { ProductTypeormDto } from '@application/dtos/product-typeorm.dto';
import { ProductEntity } from '@domain/entities/product.entity';
import { getRandomRating } from '@infra/utils/random-ratting.util';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const descriptionProduct =
  'Celebre todas as maneiras de ser homem com o Presente Natura Homem Nós. Convidamos os homens a se expressarem como realmente são, livres de padrões ou estereótipos, cuidando-se à sua maneira. O presente oferece uma linha de perfumaria e cuidados pessoais na fragrância amadeirada ambarada de Natura Homem Nós, que contém o Deo Parfum e o Desodorante Corporal. Uma escolha marcante e sofisticada para presentear. Acompanha uma caixa especial de presente.';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  async findAll(page: number = 1, limit: number = 5) {
    const [result, total] = await this.productRepository.findAndCount({
      relations: {
        productImage: true,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      products: result,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async create(product: ProductTypeormDto) {
    const productCreate = ProductEntity.createProduct(
      product.name,
      descriptionProduct,
      product.price,
    );

    const productCreateInstance = this.productRepository.create(productCreate);

    return this.productRepository.save(productCreateInstance);
  }

  async generateRating() {
    const products = await this.productRepository.find();
    products.map(async (product) => {
      product.rating = getRandomRating();
      await this.productRepository.save(product);
    });
  }
}
