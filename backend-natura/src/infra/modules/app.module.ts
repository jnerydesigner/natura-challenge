import { AppService } from '@application/services/app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@presenters/app.controller';
import { UsersModule } from './users.module';
import { ProductsModule } from './product.module';
import { OrderModule } from './order.module';
import { OrderItensModule } from './order-itens.module';
import { ShoppingCartModule } from './shopping-cart.module';
import { ShoppingCartItensModule } from './shopping-cart-itens.module';
import { ImageProductModule } from './image-product.module';
import { AuthModule } from './auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@infra/security/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    ProductsModule,
    OrderModule,
    OrderItensModule,
    ShoppingCartModule,
    ShoppingCartItensModule,
    ImageProductModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class AppModule {}
