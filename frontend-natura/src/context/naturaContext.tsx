import { createContext, useContext, useState } from "react";

interface NaturaContextType {
  errorCoupon: string;
  setErrorCoupon: React.Dispatch<React.SetStateAction<string>>;
  cartId: string;
}

const NaturaContext = createContext<NaturaContextType | undefined>(undefined);

export const NaturaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [errorCoupon, setErrorCoupon] = useState<string>("");
  const [cartId, setCartId] = useState<string>(
    "0bdb549a-d967-4dd9-bafe-f1acb7d6a54f"
  );

  return (
    <NaturaContext.Provider value={{ errorCoupon, setErrorCoupon, cartId }}>
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
