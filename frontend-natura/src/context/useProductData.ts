import { fetchGetProductOne } from "@/actions/get-products";
import { useQuery } from "@tanstack/react-query";

export const useProductData = (productId: string) => {
  return useQuery({
    queryKey: ["productOne", productId],
    queryFn: async () => {
      const data = await fetchGetProductOne(productId);

      return data;
    },
  });
};
