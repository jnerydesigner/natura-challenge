import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderItemsEntity } from "./order_items.entity";
import { ShoppingCartItemsEntity } from "./shopping_cart_items.entity";


@Entity({ name: 'products' })
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid', {name: 'product_id'})
    productId: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => OrderItemsEntity, (orderItem) => orderItem.product)
    orderItems: OrderItemsEntity[];

    @OneToMany(() => ShoppingCartItemsEntity, (shoppingItems) => shoppingItems.product)
    carItems: ShoppingCartItemsEntity[];
}