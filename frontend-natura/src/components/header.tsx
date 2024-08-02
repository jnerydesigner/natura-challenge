import { SearchInputHome } from "./inputSearchHome";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { SelectInputSearchHome } from "./selectInputSearchHome";

export const Header: React.FC = () => {
  return (
    <div className="w-8/12 h-24 bg-white flex justify-center items-center">
      <div className="w-[20%]">
        <img src="/images/logo.png" alt="Logo Natura" />
      </div>
      <div className="w-[10%]">
        <SelectInputSearchHome />
      </div>
      <div className="w-[40%] flex justify-center items-center p-2">
        <SearchInputHome />
      </div>
      <div className="w-[10%] h-[40px] flex justify-center items-center flex-row">
        <IoCartOutline className="mr-[20px] text-[1.4rem]" />
        <FaRegCircleUser />
      </div>
    </div>
  );
};
