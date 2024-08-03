import { BreadCrumbsNatura } from "@/components/breadCrumbs";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";

import { IntensCart } from "@/components/intensCart";
import { Summary } from "@/components/summary";

export default function Cart() {
  return (
    <>
      <Promotions />
      <Header />
      <div className="w-8/12 bg-white">
        <div className="h-[80px] flex justify-start items-center ml-4">
          <BreadCrumbsNatura page="Carrinho" />
        </div>
        <div className="h-[80px] flex justify-start items-center">
          <h2 className="ml-4 font-bold text-[1.8rem]">Seu Carrinho</h2>
        </div>
        <div className="h-[auto] grid grid-cols-2 gap-4 ">
          <div className="h-[auto]  flex justify-center items-center flex-col p-2 border-2 border-gray-500 m-2 rounded-[16px]">
            <IntensCart lastProduct={true} />
            <IntensCart lastProduct={true} />
            <IntensCart lastProduct={true} />
            <IntensCart lastProduct={false} />
          </div>
          <Summary />
        </div>
      </div>
    </>
  );
}
