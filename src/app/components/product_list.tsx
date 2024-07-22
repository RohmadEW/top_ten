"use client";

import { useProducts } from "@/contexts/products";
import Card from "./card";

const ProductList = () => {
  const products = useProducts();

  return (
    <>
      {products.map((product, index) => {
        return <Card key={index} number={index + 1} product={product} />;
      })}
    </>
  );
};

export default ProductList;
