import { CardProductHome } from "./cardProductHome";

export const SectionProductsHome = () => {
  return (
    <div className="w-8/12 h-[auto] bg-white relative flex justify-center items-center flex-col">
      <h2 className="my-8 text-[1.8rem] font-bold">
        descubra as fragâncias que combinam com você
      </h2>
      <div className="w-[100%] h-[auto] grid grid-cols-4 gap-1 px-12 py-8">
        <CardProductHome />
        <CardProductHome />
        <CardProductHome />
        <CardProductHome />
        <CardProductHome />
      </div>
    </div>
  );
};
