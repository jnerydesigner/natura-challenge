import { FiTag } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCouponInCart } from "@/actions/get-products";

import { useNatura } from "@/context/naturaContext";

type Inputs = {
  coupon: string;
};

type LocalStorageType = {
  cartId: string;
  userId: string;
};

const cartIdStorage = localStorage.getItem("cart");

export const CouponApplied: React.FC = () => {
  const { setErrorCoupon, cartId } = useNatura();

  const queryClient = useQueryClient();
  const [cartStorage, setCartStorage] = useState<any>({});
  useEffect(() => {
    getCartId();
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const mutation = useMutation({
    mutationFn: (coupon: string) => {
      const couponResponse = addCouponInCart(coupon, cartId).catch((e) => {
        if (e.response.data.statusCode === 404) {
          setErrorCoupon(e.response.data.message);
        }
      });

      return couponResponse;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cartOne"] }),
    onError: (error) => console.log(error),
  });

  const onSubmit: SubmitHandler<Inputs> = ({ coupon }) => {
    console.log(coupon);
    mutation.mutate(coupon);
    reset();
  };

  const getCartId = () => {
    const cart = localStorage.getItem("cart");
    setCartStorage(JSON.parse(cart || "{}"));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[100%] flex justify-between items-center gap-4 mb-4"
    >
      <div className="h-[50px] w-[70%] flex justify-center items-center bg-gray-200 ml-1 p-2 rounded-[40px]">
        <FiTag className="h-[20px] w-[20px] mx-2 text-gray-700" />
        <input
          type="text"
          placeholder="Cupon"
          className="flex-1 mr-2 p-2 bg-gray-200 placeholder:text-gray-700 placeholder:font-bold"
          {...register("coupon")}
        />
      </div>
      <button
        type="submit"
        className="h-[50px] w-[30%] bg-black rounded-[30px] font-bold text-white"
      >
        Aplicar
      </button>
    </form>
  );
};
