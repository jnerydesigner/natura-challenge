import { formatCurrency } from "@/helpers/formatCurrency";
import { ICartResponse } from "@/types/cart.types";
import { FaArrowRightLong } from "react-icons/fa6";
import { CouponApplied } from "./couponApplied";
import { useNatura } from "@/context/naturaContext";

interface SummaryProps {
  cart: ICartResponse | null;
}

export const Summary: React.FC<SummaryProps> = ({ cart }) => {
  const { errorCoupon } = useNatura();
  return (
    <div className="h-[450px]  flex justify-start items-center flex-col p-4 border-2 border-gray-500 m-2 rounded-[16px]">
      <div className="w-[100%]">
        <h2 className="text-[1.6rem] font-bold">Sumário</h2>
      </div>
      <div className="w-[100%] h-[40px] flex justify-between items-center mt-4">
        <p className="text-[1.2rem] text-gray-800">Subtotal</p>
        <p className="text-[1.2rem] font-bold">
          {cart?.oldTotal ? cart?.oldTotal?.toLocaleString() : ""}
        </p>
      </div>
      <div className="w-[100%] h-[40px] flex justify-between items-center">
        <p className="text-[1.2rem] text-gray-800">
          Desconto (
          {cart?.coupon?.type === "percentage"
            ? `${cart.coupon.percentage}%`
            : formatCurrency(Number(cart?.coupon?.value))}
          )
        </p>
        <p className="text-[1.2rem] font-bold text-trash">
          -{" "}
          {cart?.coupon?.type === "percentage"
            ? formatCurrency(Number(cart.oldTotal) - Number(cart.total))
            : formatCurrency(Number(cart?.coupon?.value))}
        </p>
      </div>
      <div className="w-[100%] h-[40px] flex justify-between items-center">
        <p className="text-[1.2rem] text-gray-800">Frete</p>
        <p className="text-[1.2rem] font-bold">R$ 30,00</p>
      </div>
      <div className="w-[100%] border-b-2 border-gray-500"></div>
      <div className="w-[100%] h-[30px] flex justify-between items-center">
        <p className="text-[1.2rem]">Cupon Aplicado</p>
        <p className="text-[1.2rem] font-bold">
          {cart?.coupon ? cart?.coupon?.couponCode : `${errorCoupon}`}
        </p>
      </div>
      <div className="w-[100%] h-[80px] flex justify-between items-center">
        <p className="text-[1.4rem]">Total</p>
        <p className="text-[1.4rem] font-bold">
          {cart?.total ? cart?.total?.toLocaleString() : ""}
        </p>
      </div>
      <CouponApplied />
      <div className="w-[100%] text-white font-semibold">
        <button className="h-[60px] w-[100%] rounded-full bg-orange flex justify-center items-center">
          <span>Finalizar Compra</span>
          <FaArrowRightLong className="ml-4" />
        </button>
      </div>
    </div>
  );
};
