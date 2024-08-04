import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ShoppingCartItemsEntity } from "./shopping_cart_items.entity";


@Entity({name:'shopping_cart'})
export class ShoppingCartEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'cart_id'})
    cartId:string;

    @Column()
    userId:number;
    
    @CreateDateColumn()
    createdAt:Date;
    
    @UpdateDateColumn()
    updatedAt:Date;

    @OneToMany(() => ShoppingCartItemsEntity, (cartItem) => cartItem.shoppingCart)
    cartItems: ShoppingCartItemsEntity[];
}