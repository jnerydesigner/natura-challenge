import { BreadCrumbsNatura } from "@/components/breadCrumbs";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";
import { ProductUnit } from "@/components/productUnit";

import { useQuery } from "@tanstack/react-query";
import { fetchGetProducts } from "@/actions/get-products";

export default function Products() {
  const { data } = useQuery({
    queryKey: ["productsList"],
    queryFn: async () => {
      const data = await fetchGetProducts(1, 10);
      return data;
    },
  });
  return (
    <>
      <Promotions />
      <Header />
      <div className="w-8/12 h-[auto] bg-white px-[20px]">
        <div className="h-[80px] flex justify-start items-center ml-4">
          <BreadCrumbsNatura page="Products" />
        </div>
        <div className="h-[auto] w-[100%] flex justify-start items-start flex-col gap-4">
          {data?.products?.map((product) => (
            <ProductUnit key={product.productId} product={product} />
          ))}
        </div>
      </div>

      {/* <div className="absolute h-[300px] w-[300px] bg-gold right-2">
        {cart?.id}
      </div> */}
    </>
  );
}
