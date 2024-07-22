import { CardProduct } from "@/app/components/CardProduct";
import { Product } from "@/types/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product, index) => {
        return <CardProduct key={index} number={index + 1} product={product} />;
      })}
    </>
  );
};

export default ProductList;
