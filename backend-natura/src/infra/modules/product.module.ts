import { ProductEntity } from "@domain/entities/product.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity])
    ],
    controllers: [],
    providers: []
})
export class ProductsModule{

}