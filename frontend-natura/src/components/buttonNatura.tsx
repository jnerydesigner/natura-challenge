import { useEffect, useState } from "react";

interface ButtonNaturaProps {
  title: string;
  bgColor: string;
  heightButton: string;
  widthButton: string;
}

export const ButtonNatura: React.FC<ButtonNaturaProps> = ({
  bgColor,
  title,
  heightButton,
  widthButton,
}) => {
  const [hButton, setHButon] = useState(heightButton);
  useEffect(() => {
    setHButon(heightButton);
  }, []);
  return (
    <button
      type="submit"
      className={`rounded-[30px] font-bold text-white ${bgColor} h-[45px] w-[38%] `}
    >
      {title}
    </button>
  );
};
