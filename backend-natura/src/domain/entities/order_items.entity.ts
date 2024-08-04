import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderEntity } from "./order.entity";
import { ProductEntity } from "./product.entity";


@Entity({name:'order_items'})
export class OrderItemsEntity{

    @PrimaryGeneratedColumn({name:'order_item_id'})
    orderItemId:number;
    @Column()
    productId:number;

    @Column()
    quantity:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @ManyToOne(() => OrderEntity, (order) => order.orderItems)
    order: OrderEntity;

    @ManyToOne(() => ProductEntity, (product) => product.orderItems)
    product: ProductEntity;
}