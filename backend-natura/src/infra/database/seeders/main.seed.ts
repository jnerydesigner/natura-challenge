import { DataSource } from 'typeorm';
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ProductSeed } from './product.seed';
import { CouponSeed } from './cuopon.seed';

export class MainSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    // await runSeeder(dataSource, ProductSeed);
    await runSeeder(dataSource, CouponSeed);
  }
}
