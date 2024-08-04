import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { OrderItemsEntity } from "./order_items.entity";


@Entity({name:'orders'})
export class OrderEntity{
    @PrimaryGeneratedColumn('uuid', {name:'order_id'})
    orderId:string;

    @Column()
    userId:number;

    @Column('decimal', {precision: 5, scale: 2})
    totalPrice:number;

    @Column()
    quantity:number;

    @Column()
    status:string;
    
    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @ManyToOne(() => UserEntity, (user) => user.orders)
    user: UserEntity;

    @OneToMany(() => OrderItemsEntity, (orderItem) => orderItem.order)
    orderItems: OrderItemsEntity[];
}