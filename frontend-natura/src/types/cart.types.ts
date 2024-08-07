export interface IProduct {
  id: string;
  price: number;
  quantity: number;
}

export interface ICartProduct {
  id: string;
  product: IProduct[];
}

export interface IProductCartImage {
  imageUrl: string;
  isPricipalImageProduct: boolean;
  imageProductId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductCart {
  productId: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  productImage: IProductCartImage[];
}

export interface ICartItem {
  quantity: number;
  product: IProductCart;
  cartItemId: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICartCoupon {
  percentage: string;
  value: string;
  couponCode: string;
  expirationDate: string;
  couponId: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICartResponse {
  userId: string;
  cartId: string;
  total?: string;
  oldTotal?: string;
  coupon?: ICartCoupon;
  createdAt: string;
  updatedAt: string;
  cartItems: ICartItem[];
}
