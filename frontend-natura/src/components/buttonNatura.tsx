import { useNatura } from "@/context/naturaContext";

interface ButtonNaturaProps {
  title: string;
  bgColor: string;
  id: string;
}

export const ButtonNatura: React.FC<ButtonNaturaProps> = ({
  bgColor,
  title,
  id,
}) => {
  const { addProductToCart, products } = useNatura();
  const findProduct = () => {
    const product = products?.find((item) => item.id === id);
    const productCart = {
      id: "1",
      product: [product],
    };

    return productCart;
  };

  return (
    <button
      type="submit"
      className={`rounded-[30px] font-bold text-white ${bgColor} h-[45px] w-[38%] `}
      onClick={() => addProductToCart(productCart)}
    >
      {title}
    </button>
  );
};
