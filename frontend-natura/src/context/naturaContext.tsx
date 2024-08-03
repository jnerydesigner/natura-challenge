import { createContext, useContext, useEffect, useState } from "react";
import { IProductType } from "@/types/products.types";
import { Api } from "@/api/api";

interface NaturaContextType {
  products: IProductType[] | null;
  setProducts: React.Dispatch<React.SetStateAction<IProductType[] | null>>;
}

const NaturaContext = createContext<NaturaContextType | undefined>(undefined);

export const NaturaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProductType[] | null>(null);

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

  return (
    <NaturaContext.Provider value={{ products, setProducts }}>
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
