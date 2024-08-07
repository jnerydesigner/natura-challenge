export type CreateCartDTO = {
  userId: string;
  productId: string;
};

export type UpdatedCartDTO = {
  userId: string;
  productId: string;
  cartId: string;
  quantity?: number;
};

export type DeleteItemCartDTO = {
  userId: string;
  cartId: string;
  cartItemId: string;
};
