import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeed } from './seeders/main.seed';
import { ImageProductEntity } from '@domain/entities/image-product.entity';
import { OrderEntity } from '@domain/entities/order.entity';
import { OrderItemsEntity } from '@domain/entities/order_items.entity';
import { ProductEntity } from '@domain/entities/product.entity';
import { ShoppingCartEntity } from '@domain/entities/shopping_cart.entity';
import { ShoppingCartItemsEntity } from '@domain/entities/shopping_cart_items.entity';
import { UserEntity } from '@domain/entities/user.entity';

const portDb = parseInt(process.env.DB_PORT) || 15433;

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST.toString(),
  port: portDb,
  username: process.env.DB_USER.toString(),
  password: process.env.DB_PASS.toString(),
  database: process.env.DB_NAME.toString(),
  entities: [
    ProductEntity,
    OrderEntity,
    UserEntity,
    ShoppingCartEntity,
    ShoppingCartItemsEntity,
    ImageProductEntity,
    OrderItemsEntity,
  ],
  seeds: [MainSeed],
  synchronize: false,
};

export const AppDataSource = new DataSource(options);
