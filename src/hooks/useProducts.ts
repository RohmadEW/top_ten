import { getProducts } from "@/api/getProducts";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: getProducts });
};
