import { CardProduct, CardProductLoading } from "@/app/components/CardProduct";
import { Product } from "@/types/product";

interface ProductListProps {
  isLoading: boolean;
  products: Product[];
}

const Loading = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => {
        return <CardProductLoading key={index} />;
      })}
    </>
  );
};

const ProductList = ({ isLoading, products }: ProductListProps) => {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {products.map((product, index) => {
        return <CardProduct key={index} number={index + 1} product={product} />;
      })}
    </>
  );
};

export default ProductList;
