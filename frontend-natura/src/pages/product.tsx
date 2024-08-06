import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";
import { BreadCrumbsNatura } from "@/components/breadCrumbs";
import { StarRating } from "@/components/starRating";
import { ItensCart } from "@/components/itens-cart";
import { IoBagAddOutline, IoLocationOutline } from "react-icons/io5";
import { formatCurrency } from "@/helpers/formatCurrency";

import { useProductData } from "@/context/useProductData";

export default function Product() {
  const { id } = useParams();
  const query = useProductData(id ? id : "");

  return (
    <>
      <Promotions />
      <Header />

      <div className="w-8/12 bg-white px-[20px]" id="product">
        <div>
          <div className="h-[80px] flex justify-start items-center ml-4">
            <BreadCrumbsNatura page="Natura Home" linkFather="products" />
          </div>
          <div className="w-[100%] flex justify-between items-center gap-2">
            <div className="h-[auto] w-[100px] grid grid-rows-5 gap-4 p-4">
              {query.data?.productImage.map((image) => (
                <div className="h-[100%] active" key={image.imageProductId}>
                  <img src={image.imageUrl} alt="" className="rounded-[8px]" />
                </div>
              ))}
            </div>

            <div className="w-[630px] h-[500px] flex justify-center items-center ">
              {query.data?.productImage && (
                <div className="w-[78%]">
                  <img
                    src={query.data?.productImage?.[0].imageUrl}
                    alt={query.data?.name}
                    className="rounded-[8px] shadow-2xl"
                  />
                </div>
              )}
            </div>
            <div className="h-[490px] flex-1 border-2 border-gray-600 p-4 rounded-[8px]">
              <h3 className="text-2xl">{query.data?.name}</h3>
              <p className="text-sm">NATURA</p>
              <div className="w-full h-14 flex justify-start items-center">
                <StarRating rating={query.data?.rating ?? "0.0"} />
              </div>
              <p className="h-4 text-sm line-through text-gray-600">
                {formatCurrency(Number(query.data?.price))}
              </p>
              <p className="text-2xl font-bold text-orange flex justify-start items-center mt-4 mb-2">
                {formatCurrency(Number(query.data?.price))}
                <span className="h-[20px] text-[0.8rem] ml-4 bg-orange text-white px-2 rounded-full flex justify-center items-center">
                  -20%
                </span>
              </p>
              <p className="mb-4">
                À vista ou em até 5x de R${" "}
                {(Number(query.data?.price) ?? 0) / 5} sem juros
              </p>
              <div className="w-full h-[100px] flex justify-start items-center pl-4 pt-2 pb-2">
                <ItensCart />
                <button className="h-[42px] w-[180px] bg-orange flex justify-center items-center rounded-3xl">
                  <IoBagAddOutline className="mr-4" />
                  <span>Adicionar</span>
                </button>
              </div>
              <div className="w-full flex justify-between items-center gap-2">
                <div className="w-80 h-[40px] my-4 border border-gray-800 rounded-sm flex justify-center items-center">
                  <IoLocationOutline className="w-[100px]" />
                  <input
                    type="text"
                    placeholder="Insira seu cep"
                    className="h-[40px] w-[200px] flex-1 bg-transparent border-none"
                  />
                </div>
                <button className="w-full h-[40px] flex justify-center items-center bg-orange rounded-sm">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 my-4"></div>
        <div>
          <div className="p-4">
            <h2 className="text-2xl mb-4 font-bold">Descriçao</h2>
            <p className="leading-relaxed">{query.data?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
