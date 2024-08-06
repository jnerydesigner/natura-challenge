type ProductImage = {
  imageUrl: string;
  isPricipalImageProduct: boolean;
  imageProductId: string;
  createdAt: string;
  updatedAt: string;
};

export type IProduct = {
  productId: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  createdAt: string;
  updatedAt: string;
  productImage: ProductImage[];
};

export type IProductsResponse = {
  products: IProduct[];
  total: number;
  page: number;
  lastPage: number;
};

export interface IProductImage {
  imageUrl: string;
  isPricipalImageProduct: boolean;
  imageProductId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductResponse {
  productId: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  createdAt: string;
  updatedAt: string;
  productImage: IProductImage[];
}
