import { BreadCrumbsNatura } from "@/components/breadCrumbs";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";

import { IntensCart } from "@/components/intensCart";
import { Summary } from "@/components/summary";
import { useCartData } from "@/context/useCartData";

export default function Cart() {
  const { data } = useCartData();

  return (
    <>
      <Promotions />
      <Header />
      <div className="w-8/12 h-[100vh] bg-white px-[20px]">
        <div className="h-[80px] flex justify-start items-center ml-4">
          <BreadCrumbsNatura page="Carrinho" />
        </div>
        <div className="h-[80px] flex justify-start items-center">
          <h2 className="ml-4 font-bold text-[1.8rem]">Seu Carrinho</h2>
        </div>
        <div className="h-[auto] grid grid-cols-2 gap-4 ">
          <div className="h-[auto]  flex justify-center items-center flex-col p-2 border-2 border-gray-500 m-2 rounded-[16px]">
            {data?.cartItems.map((item, index) => (
              <IntensCart
                key={item.product.productId}
                lastProduct={index !== data.cartItems.length - 1}
                item={item}
                cartId={data.cartId}
                userId={data.userId}
              />
            ))}
          </div>
          <Summary cart={data ? data : null} />
        </div>
      </div>
    </>
  );
}
