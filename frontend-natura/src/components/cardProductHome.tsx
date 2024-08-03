import { useState } from "react";
import { StarRating } from "./starRating";
import { Link } from "react-router-dom";
import { IProductType } from "@/types/products.types";
import { formatCurrency } from "@/helpers/formatCurrency";

interface CardProductHomeProps {
  product: IProductType;
}

export const CardProductHome: React.FC<CardProductHomeProps> = ({
  product,
}) => {
  const [discountExists, setDiscountExists] = useState(true);

  return (
    <Link to={`/product/1`}>
      <div className="w-[100%] h-[400px] relative flex justify-center items-center flex-col">
        <div className="w-[90%]">
          <img
            src={product.image[0].url}
            alt={product.title}
            className="rounded-xl"
          />
        </div>
        <h3 className="text-left w-[100%] ml-8 font-bold">{product.title}</h3>
        <div className="w-[90%] flex justify-start px-1 py-1 items-center">
          <StarRating rating={product.ratting} />
        </div>
        <div className="w-[90%] flex justify-between items-center">
          <span className="text-xl font-bold">
            {formatCurrency(product.price)}
          </span>
          {discountExists ? (
            <>
              <span className="text-xl line-through font-bold text-gray-800">
                {formatCurrency(product.price)}
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
    </Link>
  );
};
