export const Hero = () => {
  return (
    <div className="w-8/12 h-[auto] bg-gold relative">
      <img
        src="https://raw.githubusercontent.com/jnerydesigner/natura-challenge/main/frontend-natura/public/images/happy.png"
        alt="Hero Home"
        className="bg-contain"
      />
      <div className="absolute top-[50%] left-[10%]">
        <h2 className="text-white font-bold text-[3rem]">Se Joga No arraiá</h2>
        <p className="text-white text-[0.7rem]">
          aprovete as festas com o melhor da maquiagem
          <span className="font-bold"> Natura</span>
        </p>
        <button className="w-[220px] bg-white py-3 mt-4 rounded-full outline-none border-none">
          Comprar agora
        </button>
      </div>
    </div>
  );
};
