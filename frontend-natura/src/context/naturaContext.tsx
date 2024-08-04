import { createContext, useContext, useEffect, useState } from "react";
import { IProductType } from "@/types/products.types";
import { Api } from "@/api/api";
import { ICartProduct } from "@/types/cart.types";

interface NaturaContextType {
  products: IProductType[] | null;
  setProducts: React.Dispatch<React.SetStateAction<IProductType[] | null>>;
  cart: ICartProduct | null;
  setCart: React.Dispatch<React.SetStateAction<ICartProduct | null>>;
  addProductToCart: (product: ICartProduct) => void;
}

const NaturaContext = createContext<NaturaContextType | undefined>(undefined);

export const NaturaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProductType[] | null>(null);
  const [cart, setCart] = useState<ICartProduct | null>(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const { data } = await Api.get("/products");
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
      setProducts(null); // ou algum outro valor de fallback ou mensagem de erro
    }
  };

  const addProductToCart = (product: ICartProduct) => {
    console.log(cart);
    if (cart) {
      const productExists = cart.product.find((item) => item.id === product.id);
      if (productExists) {
        const newCart = cart.product.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: (item.quantity + 1) * 100,
              }
            : item
        );
        setCart({ ...cart, product: newCart });
      } else {
        setCart({
          ...cart,
          product: [
            ...cart.product,
            {
              ...product,
              quantity: 1,
              price: 100,
            },
          ],
        });
      }
    } else {
      setCart({
        id: "1",
        product: [
          {
            ...product,
            quantity: 1,
            price: 100,
          },
        ],
      });
    }
  };

  return (
    <NaturaContext.Provider
      value={{ products, setProducts, cart, setCart, addProductToCart }}
    >
      {children}
    </NaturaContext.Provider>
  );
};

export const useNatura = () => {
  const context = useContext(NaturaContext);
  if (context === undefined) {
    throw new Error("useNatura must be used within a NaturaProvider");
  }
  return context;
};
