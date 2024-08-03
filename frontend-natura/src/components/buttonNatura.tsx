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
  return (
    <button
      type="submit"
      className={`rounded-[30px] font-bold text-white ${bgColor} h-[${heightButton}px] w-[${widthButton}%] `}
    >
      {title}
    </button>
  );
};
