import { apiClient } from "@/api/api-client";
import { ProductMetaData } from "@/types/product";
import { Response } from "@/types/response";

type ProductsResponse = Response<ProductMetaData>;

export const getProducts = async () => {
  const result = await apiClient.get<ProductsResponse>(``);

  return result.data.data;
};
