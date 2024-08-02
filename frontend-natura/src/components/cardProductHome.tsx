import { useState } from "react";
import { StarRating } from "./starRating";

export const CardProductHome = () => {
  const [discountExists, setDiscountExists] = useState(true);

  return (
    <div className="w-[100%] h-[400px] relative flex justify-center items-center flex-col">
      <div className="w-[90%]">
        <img src="/images/product.jpg" alt="product" className="rounded-xl" />
      </div>
      <h3 className="text-left w-[100%] ml-8 font-bold">Natura Homem</h3>
      <div className="w-[90%] flex justify-start px-1 py-1 items-center">
        <StarRating rating={4.5} />
      </div>
      <div className="w-[90%] flex justify-between items-center">
        <span className="text-xl font-bold">R$ 212,00</span>
        {discountExists ? (
          <>
            <span className="text-xl line-through font-bold text-gray-800">
              R$ 212,00
            </span>
            <span className="bg-pinkLight text-[0.6rem] py-[4px] px-[8px] rounded-[10px] text-pinkDark font-bold">
              -20%
            </span>
          </>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
