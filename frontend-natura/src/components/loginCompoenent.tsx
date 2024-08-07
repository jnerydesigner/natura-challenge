import { InputLogin } from "./inputLogin";

export const LoginComponent: React.FC = () => {
  return (
    <div className="w-8/12 h-[80vh] flex justify-center items-center">
      <div className="w-[35%] h-[auto]  p-4 rounded-lg shadow-lg flex justify-center items-center flex-col border border-gray-500">
        <h1 className="text-4xl font-bold">Cosméticos&Co</h1>
        <form className="w-[100%] h-[250px] flex justify-center items-center flex-col p-2">
          <InputLogin placeholder="email" type="text" />
          <InputLogin placeholder="senha" type="password" />

          <button className="w-[100%] h-[40px] bg-white mt-2 rounded-lg">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
