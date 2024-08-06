import { Api } from "@/api/api";
import { ICartResponse } from "@/types/cart.types";
import { useQuery } from "@tanstack/react-query";

const cartId = "9844fd7a-e1f4-4ef4-8e91-79d0901de05b";

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
