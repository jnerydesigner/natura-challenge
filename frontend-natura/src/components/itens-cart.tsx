import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { TbMinus } from "react-icons/tb";

interface ItensCartProps {
  productId: string;
}

export const ItensCart: React.FC<ItensCartProps> = ({ productId }) => {
  const [qtdCartItens, setQtdCarItens] = useState(1);

  const addQtdCartItens = () => {
    setQtdCarItens((old) => old + 1);
  };
  const removeQtdCartItens = () => {
    if (qtdCartItens === 1) return;
    setQtdCarItens((old) => old - 1);
  };

  return (
    <div className="h-[45px] w-[120px] bg-gray-200 flex justify-between items-center mr-4 rounded-[50px] font-bold">
      <button className="hover:cursor-pointer" onClick={removeQtdCartItens}>
        <TbMinus className="text-black text-[1.2rem] ml-2" />
      </button>
      <p>{qtdCartItens}</p>
      <button className="hover:cursor-pointer" onClick={addQtdCartItens}>
        <FiPlus className="text-black text-[1.2rem] mr-2" />
      </button>
    </div>
  );
};
