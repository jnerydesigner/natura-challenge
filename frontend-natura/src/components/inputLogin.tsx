interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputLogin: React.FC<InputProps> = ({ ...inputProps }) => {
  return (
    <input
      {...inputProps}
      className="w-[100%] h-[40px] p-2 mt-2 rounded-lg outline-none"
    />
  );
};
