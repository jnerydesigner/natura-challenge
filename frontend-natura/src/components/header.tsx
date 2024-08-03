import { SearchInputHome } from "./inputSearchHome";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { SelectInputSearchHome } from "./selectInputSearchHome";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="w-8/12 h-24 bg-white flex justify-between items-center border-b-2 px-4">
      <div className="w-[20%]">
        <Link to={"/"}>
          <p className="text-[1.9rem] font-bold">Cosméticos&Co</p>
        </Link>
      </div>
      <div className="w-[10%]">
        <SelectInputSearchHome />
      </div>
      <div className="w-[40%] flex justify-center items-center p-2">
        <SearchInputHome />
      </div>
      <div className="w-[10%] h-[40px] flex justify-center items-center flex-row relative">
        <Link to={"/cart"}>
          <IoCartOutline className="mr-[40px] text-[1.4rem]" />
        </Link>
        <FaRegCircleUser />

        <div className="h-[20px] w-[20px] bg-trash flex justify-center items-center rounded-[50%] absolute top-[1px] left-10">
          <span className="text-[0.6rem] text-white font-bold">4</span>
        </div>
      </div>
    </div>
  );
};
