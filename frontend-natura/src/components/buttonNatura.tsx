interface ButtonNaturaProps {
  title: string;
  bgColor: string;
}

export const ButtonNatura: React.FC<ButtonNaturaProps> = ({
  bgColor,
  title,
}) => {
  const createCart = () => {
    console.log("cart");
  };

  return (
    <button
      type="submit"
      onClick={createCart}
      className={`rounded-[30px] font-bold text-white ${bgColor} h-[45px] w-[38%] `}
    >
      {title}
    </button>
  );
};
