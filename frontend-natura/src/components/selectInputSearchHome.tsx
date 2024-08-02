export const SelectInputSearchHome = () => {
  return (
    <div className="relative inline-block w-full max-w-xs">
      <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:bg-white focus:border-none border-none">
        <option>Produtos</option>
        <option>Cosméticos</option>
        <option>Higiene</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293L10 12l4.707-4.707-1.414-1.414L10 9.172l-3.293-3.293z" />
        </svg>
      </div>
    </div>
  );
};
