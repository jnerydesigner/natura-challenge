import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Promotions } from "../components/promotions";

import { useProductData } from "@/context/useProductData";
import { ProductDetail } from "@/components/productDetail";

export default function Product() {
  const { id } = useParams();
  const query = useProductData(id ? id : "");
  const dataProductResponse = query.data;

  return (
    <>
      <Promotions />
      <Header />

      {dataProductResponse ? (
        <ProductDetail dataProductResponse={dataProductResponse} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
