import { BreadCrumbsNatura } from "@/components/breadCrumbs";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";
import { ProductUnit } from "@/components/productUnit";
import { useNatura } from "@/context/naturaContext";

export default function Products() {
  const { products, cart } = useNatura();
  return (
    <>
      <Promotions />
      <Header />
      <div className="w-8/12 h-[auto] bg-white px-[20px]">
        <div className="h-[80px] flex justify-start items-center ml-4">
          <BreadCrumbsNatura page="Products" />
        </div>
        <div className="h-[auto] w-[100%] flex justify-start items-start flex-col gap-4">
          {products?.map((product) => (
            <ProductUnit key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="absolute h-[300px] w-[300px] bg-gold right-2">
        {cart?.id}
      </div>
    </>
  );
}
