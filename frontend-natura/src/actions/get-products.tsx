import { Api } from "@/api/api";
import {
  IProductResponse,
  IProductsResponse,
} from "@/types/product-response.type";

export const fetchGetProducts = async (page: number, limit: number) => {
  const { data } = await Api.get<IProductsResponse>(
    `/products?page=${page}&limit=${limit}`
  );
  return data;
};

export const fetchGetProductOne = async (productId: string | undefined) => {
  if (!productId) return null;
  const { data } = await Api.get<IProductResponse>(
    `/products/one/${productId}`
  );

  return data;
};
