import {
  fetchAddProductItemInCart,
  fetchRemoveProductItemInCart,
  removeItemCartOne,
} from "@/actions/get-products";
import { formatCurrency } from "@/helpers/formatCurrency";
import { ICartItem, ICartResponse } from "@/types/cart.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { TbMinus } from "react-icons/tb";

interface ItensCartProps {
  lastProduct: boolean;
  item: ICartItem;
  cartId: string;
  userId: string;
}

export const IntensCart: React.FC<ItensCartProps> = ({
  lastProduct,
  item,
  cartId,
  userId,
}) => {
  const queryClient = useQueryClient();
  const mutationAddItemProduct = useMutation<ICartResponse, string, any>({
    mutationFn: async (productId) => {
      const cart = {
        userId,
        productId,
        cartId,
      };

      const response = await fetchAddProductItemInCart(
        productId,
        cartId,
        userId
      );

      localStorage.setItem("cart", JSON.stringify(cart));

      queryClient.invalidateQueries({ queryKey: ["cartOne"] });

      return response;
    },
  });

  const mutationRemoveItemProduct = useMutation<ICartResponse, string, any>({
    mutationFn: async (productId) => {
      const cart = {
        userId,
        productId,
        cartId,
      };

      const response = await fetchRemoveProductItemInCart(
        productId,
        cartId,
        userId
      );

      localStorage.setItem("cart", JSON.stringify(cart));

      queryClient.invalidateQueries({ queryKey: ["cartOne"] });
      queryClient.invalidateQueries({ queryKey: ["qtdCartItens"] });

      return response;
    },
  });

  const removeItemCart = useMutation({
    mutationFn: async (cartItemId: string) => {
      console.log(cartItemId);
      const response = await removeItemCartOne(cartItemId);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartOne"] });
      queryClient.invalidateQueries({ queryKey: ["qtdCartItens"] });
    },
  });

  return (
    <div
      className={`h-[200px] flex justify-center items-center  ml-4 ${
        lastProduct ? "border-b-2 border-gray-500" : ""
      }`}
    >
      <div className="w-[30%] ml-4 p-2">
        <img
          src={item.product.productImage?.[0].imageUrl}
          alt={item.product.name}
          className="rounded-[8px]"
        />
      </div>
      <div className="h-[100%] flex flex-1 justify-between items-start flex-col">
        <p className="text-[1.2rem] font-bold mt-4 ml-2">
          {item.product.name} - {item.cartItemId}
        </p>
        <p className="text-[1.4rem] font-bold mb-4 ml-2">
          {formatCurrency(Number(item.product.price))}
        </p>
      </div>
      <div className="h-[100%] flex justify-between items-end flex-col">
        <button
          className="h-[20px] w-[20px] flex justify-center items-center m-4"
          onClick={() => removeItemCart.mutate(item.cartItemId)}
        >
          <BsFillTrash3Fill className="text-trash h-[100%] w-[100%] " />
        </button>
        <div>
          <div className="h-[45px] w-[120px] bg-gray-200 flex justify-between items-center mb-4 mr-4 rounded-[50px] font-bold">
            <p>
              <button
                onClick={() =>
                  mutationRemoveItemProduct.mutate(item.product.productId)
                }
                className="hover:cursor-pointer"
              >
                <TbMinus className="text-black text-[1.2rem] ml-2" />
              </button>
            </p>
            <p>{item.quantity}</p>
            <p>
              <button
                onClick={() =>
                  mutationAddItemProduct.mutate(item.product.productId)
                }
                className="hover:cursor-pointer"
              >
                <FiPlus className="text-black text-[1.2rem] mr-2" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
