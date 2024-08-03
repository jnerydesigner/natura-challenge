import { ButtonNatura } from "./buttonNatura";

export const ProductUnit = () => {
  return (
    <div className="w-[70%] flex justify-center items-center ml-4">
      <div className="w-[25%]">
        <img src="/images/product.jpg" alt="product" className="rounded-xl" />
      </div>
      <div className="w-[90%] flex justify-between items-start flex-col h-[150px] ml-2 p-4">
        <p className="text-[1.2rem] font-bold">Perfume Natura Homem</p>
        <p className="text-[1.2rem] font-bold">R$ 260,00</p>
        <ButtonNatura
          title="Adicionar"
          bgColor="bg-orange"
          heightButton="38"
          widthButton="55"
        />
      </div>
    </div>
  );
};
