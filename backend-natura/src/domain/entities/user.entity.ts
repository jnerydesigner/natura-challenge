import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ShoppingCartEntity } from "./shopping_cart.entity";
import { OrderEntity } from "./order.entity";


@Entity({name:'users'})
export class UserEntity{
    @PrimaryGeneratedColumn({name: 'user_id'})
    userId:number;

    @Column()
    username:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @OneToOne(() => ShoppingCartEntity)
    @JoinTable()
    shoppingCart: ShoppingCartEntity


    @OneToMany(() => OrderEntity, (order) => order.user)
    orders: OrderEntity[];
}