import { IoIosSearch } from "react-icons/io";

export const SearchInputHome = () => {
  return (
    <div className="w-[100%] flex items-center bg-inputGray rounded-[40px]">
      <IoIosSearch className="text-gray-700 ml-4 mr-4 text-[20px]" />
      <input
        type="text"
        placeholder="O que está buscando hoje?"
        className="outline-none w-[390px] bg-inputGray py-[8px] px-[20px] placeholder:text-gray-700"
      />
    </div>
  );
};
