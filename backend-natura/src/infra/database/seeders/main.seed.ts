import { DataSource } from 'typeorm';
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ProductSeed } from './product.seed';
import { CouponSeed } from './cuopon.seed';
import { ShoppingCartSeed } from './shopping-cart.seed';
import { UserSeed } from './user.seed';

export class MainSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await runSeeder(dataSource, UserSeed);
    await runSeeder(dataSource, ProductSeed);
    await runSeeder(dataSource, CouponSeed);
    await runSeeder(dataSource, ShoppingCartSeed);
  }
}
