import { BsFillTrash3Fill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { TbMinus } from "react-icons/tb";

interface ItensCartProps {
  lastProduct: boolean;
}

export const IntensCart: React.FC<ItensCartProps> = ({ lastProduct }) => {
  return (
    <div
      className={`h-[200px] flex justify-center items-center  ml-4 ${
        lastProduct ? "border-b-2 border-gray-500" : ""
      }`}
    >
      <div className="w-[30%] ml-4 p-2">
        <img
          src="https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/frontend-natura/public/images/product.jpg"
          alt="Products"
          className="rounded-[8px]"
        />
      </div>
      <div className="h-[100%] flex flex-1 justify-between items-start flex-col">
        <p className="text-[1.2rem] font-bold mt-4 ml-2">Natura Homem</p>
        <p className="text-[1.4rem] font-bold mb-4 ml-2">R$ 145,00</p>
      </div>
      <div className="h-[100%] flex justify-between items-end flex-col">
        <button className="h-[20px] w-[20px] flex justify-center items-center m-4">
          <BsFillTrash3Fill className="text-trash h-[100%] w-[100%] " />
        </button>
        <div>
          <div className="h-[45px] w-[120px] bg-gray-200 flex justify-between items-center mb-4 mr-4 rounded-[50px] font-bold">
            <p>
              <TbMinus className="text-black text-[1.2rem] ml-2" />
            </p>
            <p>1</p>
            <p>
              <FiPlus className="text-black text-[1.2rem] mr-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
