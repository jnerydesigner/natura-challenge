import { createContext, useContext, useState } from "react";

interface NaturaContextType {
  errorCoupon: string;
  setErrorCoupon: React.Dispatch<React.SetStateAction<string>>;
}

const NaturaContext = createContext<NaturaContextType | undefined>(undefined);

export const NaturaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [errorCoupon, setErrorCoupon] = useState<string>("");

  return (
    <NaturaContext.Provider value={{ errorCoupon, setErrorCoupon }}>
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
