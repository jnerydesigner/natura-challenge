import { IoBagAddOutline, IoLocationOutline } from "react-icons/io5";
import { ItensCart } from "./itens-cart";
import { StarRating } from "./starRating";
import { formatCurrency } from "@/helpers/formatCurrency";
import { BreadCrumbsNatura } from "./breadCrumbs";
import { IProductResponse } from "@/types/product-response.type";
import { formatNumberTwoDecimals } from "@/lib/formatNumberToDecimals";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fecthUpdateCart } from "@/actions/get-products";
import { useNatura } from "@/context/naturaContext";

interface ProductDetailProps {
  dataProductResponse: IProductResponse;
}

interface MutationProps {
  userId: string;
  productId: string | undefined;
  cartId: string;
  quantity: number;
}
export const ProductDetail: React.FC<ProductDetailProps> = ({
  dataProductResponse: data,
}) => {
  const { cartId: cartContextId } = useNatura();
  const { id: productId } = useParams<{ id: string }>();
  const safeProductId = productId ?? "";
  useEffect(() => {
    addProductInLocalStorage(safeProductId);
  }, []);
  const [cartId, setCartId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [producIdLocalStorage, setProducIdLocalStorage] = useState<string>("");

  const queryClient = useQueryClient();

  const addProductInLocalStorage = (productIdLocal: string) => {
    if (!productIdLocal) return;
    localStorage.removeItem("producIdLocalStorage");
    localStorage.setItem("producIdLocalStorage", productIdLocal);

    setProducIdLocalStorage(localStorage.getItem("producIdLocalStorage") ?? "");
  };

  useEffect(() => {
    getCartLocalStorage();
  }, []);

  const getCartLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    const productIdLocal = localStorage.getItem("producIdLocalStorage");
    if (cart) {
      const cartParse = JSON.parse(cart);
      setCartId(cartParse.cartId);
      setUserId(cartParse.userId);

      console.log(productIdLocal);
    }
  };

  const mutation = useMutation({
    mutationFn: async ({
      userId,
      productId,
      cartId,
      quantity,
    }: MutationProps) => {
      const response = await fecthUpdateCart(
        userId,
        productId,
        cartContextId,
        quantity
      );

      queryClient.invalidateQueries({
        queryKey: ["cartOne", "qtdCartItens"],
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartOne"] });
      queryClient.invalidateQueries({ queryKey: ["qtdCartItens"] });
    },
  });

  return (
    <div className="w-8/12 bg-white px-[20px]" id="product">
      <div>
        <div className="h-[80px] flex justify-start items-center ml-4">
          <BreadCrumbsNatura page={data.name} linkFather="products" />
        </div>
        <div className="w-[100%] flex justify-between items-center gap-2">
          <div className="h-[auto] w-[100px] grid grid-rows-5 gap-4 p-4">
            {data?.productImage.map((image) => (
              <div className="h-[100%] active" key={image.imageProductId}>
                <img src={image.imageUrl} alt="" className="rounded-[8px]" />
              </div>
            ))}
          </div>

          <div className="w-[630px] h-[500px] flex justify-center items-center ">
            {data?.productImage && (
              <div className="w-[78%]">
                <img
                  src={data?.productImage?.[0].imageUrl}
                  alt={data?.name}
                  className="rounded-[8px] shadow-2xl"
                />
              </div>
            )}
          </div>
          <div className="h-[490px] flex-1 border-2 border-gray-600 p-4 rounded-[8px]">
            <h3 className="text-2xl">{data?.name}</h3>
            <p className="text-sm">
              NATURA - {cartId} - {productId} - {userId}
            </p>
            <div className="w-full h-14 flex justify-start items-center">
              <StarRating rating={data?.rating ?? "0.0"} />
            </div>
            <p className="h-4 text-sm line-through text-gray-600">
              {formatCurrency(Number(data?.price))}
            </p>
            <p className="text-2xl font-bold text-orange flex justify-start items-center mt-4 mb-2">
              {formatCurrency(Number(data?.price))}
              <span className="h-[20px] text-[0.8rem] ml-4 bg-orange text-white px-2 rounded-full flex justify-center items-center">
                -20%
              </span>
            </p>
            <p className="mb-4">
              À vista ou em até 5x de R${" "}
              {formatNumberTwoDecimals((Number(data?.price) ?? 0) / 5)} sem
              juros
            </p>
            <div className="w-full h-[100px] flex justify-start items-center pl-4 pt-2 pb-2">
              <ItensCart productId={data?.productId ?? ""} />
              <button
                className="h-[42px] w-[180px] bg-orange flex justify-center items-center rounded-3xl"
                onClick={() =>
                  mutation.mutate({
                    userId,
                    productId: producIdLocalStorage,
                    cartId: cartId,
                    quantity: 1,
                  })
                }
              >
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
          <p className="leading-relaxed">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};
