import { IProductType } from "@/types/products.types";
import { ButtonNatura } from "./buttonNatura";
import { formatCurrency } from "@/helpers/formatCurrency";
import { IProduct } from "@/types/product-response.type";

interface ProductUnitProps {
  product: IProduct;
}

export const ProductUnit: React.FC<ProductUnitProps> = ({ product }) => {
  return (
    <div className="w-[70%] flex justify-center items-center ml-4">
      <div className="w-[25%]">
        <img
          src={product.productImage?.[0].imageUrl}
          alt={product?.name}
          className="rounded-xl"
        />
      </div>
      <div className="w-[90%] flex justify-between items-start flex-col h-[150px] ml-2 p-4">
        <p className="text-[1.2rem] font-bold">{product?.name}</p>
        <p className="text-[1.2rem] font-bold">
          {formatCurrency(Number(product?.price))}
        </p>
        <ButtonNatura title="Adicionar" bgColor="bg-orange" />
      </div>
    </div>
  );
};
