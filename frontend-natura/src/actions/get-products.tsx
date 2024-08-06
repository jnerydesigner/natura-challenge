import { Api } from "@/api/api";
import { IProductsResponse } from "@/types/product-response.type";

export const fetchGetProducts = async (page: number, limit: number) => {
  const { data } = await Api.get<IProductsResponse>(
    `/products?page=${page}&limit=${limit}`
  );
  return data;
};
