import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Promotions } from "./components/promotions";
import { SectionProductsHome } from "./components/sectionProductsHome";

function App() {
  return (
    <>
      <Promotions />
      <Header />
      <Hero />
      <SectionProductsHome />
    </>
  );
}

export default App;
