import { CardProductHome } from "./cardProductHome";
import { useQuery } from "@tanstack/react-query";
import { fetchGetProducts } from "@/actions/get-products";

export const SectionProductsHome = () => {
  const query = useQuery({
    queryKey: ["productsHome"],
    queryFn: () => fetchGetProducts(1, 28),
  });

  console.log("data", query.data);

  return (
    <div className="w-8/12 h-[auto] bg-white relative flex justify-center items-center flex-col">
      <h2 className="my-8 text-[1.8rem] font-bold">
        descubra as fragâncias que combinam com você
      </h2>
      <div className="w-[100%] h-[auto] grid grid-cols-4 gap-1 px-12 py-8">
        {query.data?.products.map((product) => (
          <CardProductHome key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};
