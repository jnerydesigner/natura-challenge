import { FiPlus } from "react-icons/fi";
import { TbMinus } from "react-icons/tb";

export const ItensCart: React.FC = () => {
  return (
    <div className="h-[45px] w-[120px] bg-gray-200 flex justify-between items-center mr-4 rounded-[50px] font-bold">
      <p>
        <TbMinus className="text-black text-[1.2rem] ml-2" />
      </p>
      <p>1</p>
      <p>
        <FiPlus className="text-black text-[1.2rem] mr-2" />
      </p>
    </div>
  );
};
