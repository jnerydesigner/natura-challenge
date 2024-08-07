import { Api } from "@/api/api";
import { UserInfo } from "@/constants/user";

import { ICartResponse } from "@/types/cart.types";
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

export const fetchCreateCart = async (productId: string) => {
  const userId = UserInfo;
  const cart = {
    userId,
    productId,
  };
  const { data } = await Api.post("/shopping-cart", cart);
  return data;
};

export const fetchC = async (productId: string) => {
  const userId = UserInfo;
  const cart = {
    userId,
    productId,
  };
  const { data } = await Api.post("/shopping-cart", cart);
  return data;
};

export const fetchAddProductItemInCart = async (
  productId: string,
  cartId: string,
  userId: string
) => {
  const cart = {
    userId,
    productId,
    cartId,
  };
  const { data } = await Api.patch<ICartResponse>(
    "/shopping-cart/add-item",
    cart
  );

  return data;
};

export const fetchRemoveProductItemInCart = async (
  productId: string,
  cartId: string,
  userId: string
) => {
  const cart = {
    userId,
    productId,
    cartId,
  };
  const { data } = await Api.patch<ICartResponse>(
    "/shopping-cart/remove-item",
    cart
  );

  return data;
};

export const getTotalItensCart = async (cartId: string) => {
  const cartIdRequest = "0bdb549a-d967-4dd9-bafe-f1acb7d6a54f";
  const { data } = await Api.get<number>(
    `/shopping-cart/cart/${cartIdRequest}/total-items`
  );

  return data;
};

export const fecthUpdateCart = async (
  userId: string,
  productId: string | undefined,
  cartId: string,
  quantity: number = 1
) => {
  const cart = {
    userId,
    productId,
    cartId,
    quantity,
  };
  const { data } = await Api.patch<ICartResponse>("/shopping-cart", cart);

  return cart;
};

export const removeItemCartOne = async (itemCartId: string) => {
  const { data } = await Api.delete(`/shopping-cart/cart/${itemCartId}`);
  return data;
};

export const addCouponInCart = async (couponCode: string, cartId: string) => {
  const coupon = {
    couponCode,
    cartId,
  };

  const { data } = await Api.patch(
    `/shopping-cart/cart/coupon/applied_coupon`,
    coupon
  );

  return data;
};
