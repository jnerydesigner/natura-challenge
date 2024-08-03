import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";
import { BreadCrumbsNatura } from "@/components/breadCrumbs";

export default function Product() {
  const { id } = useParams();
  return (
    <>
      <Promotions />
      <Header />

      <div className="w-8/12 bg-white px-[20px]">
        <div className="h-[80px] flex justify-start items-center ml-4">
          <BreadCrumbsNatura page="Natura Home" linkFather="products" />
        </div>
        <h1>Product - ID: {id}</h1>
      </div>
    </>
  );
}
