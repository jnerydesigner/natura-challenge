import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";

export default function Product() {
  const { id } = useParams();
  return (
    <>
      <Promotions />
      <Header />
      <div>
        <h1>Product - ID: {id}</h1>
      </div>
    </>
  );
}
