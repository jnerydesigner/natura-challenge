import { ImageProductEntity } from '@domain/entities/image-product.entity';
import { ProductEntity } from '@domain/entities/product.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ProductsDatas } from '../datas/products';

const products = ProductsDatas;

export class ProductSeed implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const productRepository = dataSource.getRepository(ProductEntity);
    const imageProductRepository = dataSource.getRepository(ImageProductEntity);

    for await (const product of products) {
      const newproduct = ProductEntity.createProduct(
        product.name,
        product.description,
        Number(product.price),
      );
      const productCreate = productRepository.create(newproduct);
      await productRepository.save(productCreate);

      for await (const image of product.productImage) {
        const imageProduct = ImageProductEntity.createProductImage(
          image.imageUrl,
          image.isPricipalImageProduct,
          productCreate,
        );
        const imageProductCreate = imageProductRepository.create(imageProduct);
        await imageProductRepository.save(imageProductCreate);
      }
    }
  }
}
