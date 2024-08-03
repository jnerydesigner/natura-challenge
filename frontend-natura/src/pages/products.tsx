import { BreadCrumbsNatura } from "@/components/breadCrumbs";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";
import { ButtonNatura } from "@/components/buttonNatura";
import { ProductUnit } from "@/components/productUnit";

export default function Products() {
  return (
    <>
      <Promotions />
      <Header />
      <div className="w-8/12 h-[auto] bg-white px-[20px]">
        <div className="h-[80px] flex justify-start items-center ml-4">
          <BreadCrumbsNatura page="Products" />
        </div>
        <div className="h-[auto] w-[100%] flex justify-start items-start flex-col gap-4">
          <ProductUnit />
          <ProductUnit />
          <ProductUnit />
          <ProductUnit />
          <ProductUnit />
          <ProductUnit />
        </div>
      </div>
    </>
  );
}
