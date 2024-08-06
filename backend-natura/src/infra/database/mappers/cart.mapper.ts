export class CartMapper {
  static toResponse(cart: any): ICart {
    return {
      userId: cart.userId,
      cartId: cart.cartId,
      createdAt: cart.createdAt,
      updatedAt: cart.updatedAt,
      cartItems: cart.cartItems.map((cartItem: CartItens) => ({
        quantity: cartItem.quantity,
        cartItemId: cartItem.cartItemId,
        createdAt: cartItem.createdAt,
        updatedAt: cartItem.updatedAt,
      })),
    };
  }
}

type CartItens = {
  quantity: number;
  price: number;
  cartItemId: string;
  createdAt: string;
  updatedAt: string;
};

export type ICart = {
  userId: string;
  cartId: string;
  createdAt: string;
  updatedAt: string;
  cartItems: CartItens[];
};
