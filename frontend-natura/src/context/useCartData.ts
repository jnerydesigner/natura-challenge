import { Api } from "@/api/api";
import { ICartResponse } from "@/types/cart.types";
import { useQuery } from "@tanstack/react-query";

const cartId = "0bdb549a-d967-4dd9-bafe-f1acb7d6a54f";

export const useCartData = () => {
  return useQuery({
    queryKey: ["cartOne", cartId],
    queryFn: async () => {
      const { data } = await Api.get<ICartResponse>(
        `/shopping-cart/cart/${cartId}`
      );

      return data;
    },
  });
};
