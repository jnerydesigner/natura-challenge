import { ICartResponse } from "@/types/cart.types";
import { FaArrowRightLong } from "react-icons/fa6";

import { FiTag } from "react-icons/fi";

interface SummaryProps {
  cart: ICartResponse | null;
}

export const Summary: React.FC<SummaryProps> = ({ cart }) => {
  return (
    <div className="h-[450px]  flex justify-start items-center flex-col p-4 border-2 border-gray-500 m-2 rounded-[16px]">
      <div className="w-[100%]">
        <h2 className="text-[1.6rem] font-bold">Sumário</h2>
      </div>
      <div className="w-[100%] h-[40px] flex justify-between items-center mt-4">
        <p className="text-[1.2rem] text-gray-800">Subtotal</p>
        <p className="text-[1.2rem] font-bold">
          {cart &&
            cart.cartItems
              .map((item) => {
                return Number(item.price);
              })
              .reduce((acc, curr) => acc + curr, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
        </p>
      </div>
      <div className="w-[100%] h-[40px] flex justify-between items-center">
        <p className="text-[1.2rem] text-gray-800">Desconto (-20%)</p>
        <p className="text-[1.2rem] font-bold text-trash">- R$ 805,00</p>
      </div>
      <div className="w-[100%] h-[40px] flex justify-between items-center">
        <p className="text-[1.2rem] text-gray-800">Frete</p>
        <p className="text-[1.2rem] font-bold">R$ 15,00</p>
      </div>
      <div className="w-[100%] border-b-2 border-gray-500"></div>
      <div className="w-[100%] h-[80px] flex justify-between items-center">
        <p className="text-[1.4rem]">Total</p>
        <p className="text-[1.4rem] font-bold">
          {" "}
          {cart &&
            cart.cartItems
              .map((item) => {
                return Number(item.price);
              })
              .reduce((acc, curr) => acc + curr, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
        </p>
      </div>
      <div className="w-[100%] flex justify-between items-center gap-4 mb-4">
        <div className="h-[50px] w-[70%] flex justify-center items-center bg-gray-200 ml-1 p-2 rounded-[40px]">
          <FiTag className="h-[20px] w-[20px] mx-2 text-gray-700" />
          <input
            type="text"
            placeholder="Cupon"
            className="flex-1 mr-2 p-2 bg-gray-200 placeholder:text-gray-700 placeholder:font-bold"
          />
        </div>
        <button
          type="submit"
          className="h-[50px] w-[30%] bg-black rounded-[30px] font-bold text-white"
        >
          Aplicar
        </button>
      </div>
      <div className="w-[100%] text-white font-semibold">
        <button className="h-[60px] w-[100%] rounded-full bg-orange flex justify-center items-center">
          <span>Finalizar Compra</span>
          <FaArrowRightLong className="ml-4" />
        </button>
      </div>
    </div>
  );
};
