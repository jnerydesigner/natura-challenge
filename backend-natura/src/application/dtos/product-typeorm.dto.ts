export type ImageProductTypeormDto = {
  imageProductId?: string;
  imageUrl: string;
  isPricipalImageProduct: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  product?: ProductTypeormDto;
};

export type ShoppingCartItemsTypeormDto = {
  shoppingCartItemId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  product: ProductTypeormDto;
};

export type OrderTypeormDto = {
  orderId: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  orderItems: OrderItemsTypeormDto[];
};

export type OrderItemsTypeormDto = {
  orderItemId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  product: ProductTypeormDto;
  order: OrderTypeormDto;
};

export type ProductTypeormDto = {
  productId?: string;
  name: string;
  description: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  orderItems?: OrderItemsTypeormDto[];
  productImage?: ImageProductTypeormDto[];
  carItems?: ShoppingCartItemsTypeormDto[];
};
