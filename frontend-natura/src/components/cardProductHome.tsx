import { StarRating } from "./starRating";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/helpers/formatCurrency";
import { IProduct } from "@/types/product-response.type";

interface CardProductHomeProps {
  product: IProduct;
}

export const CardProductHome: React.FC<CardProductHomeProps> = ({
  product,
}) => {
  return (
    <Link to={`/product/${product.productId}`}>
      <div className="w-[100%] h-[500px] relative flex justify-center items-center flex-col">
        <div className="w-[90%]">
          <img
            src={product.productImage[0].imageUrl}
            alt={product.name}
            className="rounded-xl"
          />
        </div>
        <h3 className="text-left w-[100%] ml-8 font-bold h-12">
          {product.name}
        </h3>
        <div className="w-[90%] h-[80px] flex justify-start px-1 py-1 items-center">
          <StarRating rating={product.rating} />
        </div>
        <div className="w-[90%] flex justify-between items-center">
          <span className="text-xl font-bold">
            {formatCurrency(Number(product.price))}
          </span>
          {/* {discountExists ? (
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
          )} */}
        </div>
      </div>
    </Link>
  );
};
