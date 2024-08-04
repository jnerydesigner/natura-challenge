import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ShoppingCartEntity } from "./shopping_cart.entity";
import { ProductEntity } from "./product.entity";


@Entity({ name: 'shopping_cart_items' })
export class ShoppingCartItemsEntity {
    @PrimaryGeneratedColumn({ name: 'cart_item_id' })
    cartItemId: number;

    @Column()
    cartId: number;

    @Column()
    productId: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => ShoppingCartEntity, (cart) => cart.cartItems)
    shoppingCart: ShoppingCartEntity;

    @ManyToOne(() => ProductEntity, (product) => product.carItems)
    product: ProductEntity;
}