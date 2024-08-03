import { SearchInputHome } from "./inputSearchHome";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { SelectInputSearchHome } from "./selectInputSearchHome";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="w-8/12 h-24 bg-white flex justify-center items-center">
      <div className="w-[20%]">
        <Link to={"/"}>
          <img src="/images/logo.png" alt="Logo Natura" />
        </Link>
      </div>
      <div className="w-[10%]">
        <SelectInputSearchHome />
      </div>
      <div className="w-[40%] flex justify-center items-center p-2">
        <SearchInputHome />
      </div>
      <div className="w-[10%] h-[40px] flex justify-center items-center flex-row">
        <Link to={"/cart"}>
          <IoCartOutline className="mr-[20px] text-[1.4rem]" />
        </Link>
        <FaRegCircleUser />
      </div>
    </div>
  );
};
