import { IProductType } from "@/types/products.types";
import { ButtonNatura } from "./buttonNatura";
import { formatCurrency } from "@/helpers/formatCurrency";

interface ProductUnitProps {
  product: IProductType;
}

export const ProductUnit: React.FC<ProductUnitProps> = ({ product }) => {
  return (
    <div className="w-[70%] flex justify-center items-center ml-4">
      <div className="w-[25%]">
        <img
          src={product.image?.[0].url}
          alt={product?.title}
          className="rounded-xl"
        />
      </div>
      <div className="w-[90%] flex justify-between items-start flex-col h-[150px] ml-2 p-4">
        <p className="text-[1.2rem] font-bold">{product?.title}</p>
        <p className="text-[1.2rem] font-bold">
          {formatCurrency(product?.price)}
        </p>
        <ButtonNatura title="Adicionar" bgColor="bg-orange" />
      </div>
    </div>
  );
};
