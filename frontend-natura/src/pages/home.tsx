import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Promotions } from "../components/promotions";
import { SectionProductsHome } from "../components/sectionProductsHome";

export default function Home() {
  return (
    <>
      <Promotions />
      <Header />
      <Hero />
      <SectionProductsHome />
    </>
  );
}
