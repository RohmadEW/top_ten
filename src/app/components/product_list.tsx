"use client";

import Card from "./card";
import { useProducts } from "../contexts/products";

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
