import { apiClient } from "@/api/api-client";
import { ProductMetaData } from "@/types/product";
import { Response } from "@/types/response";
import axios from "axios";

type ProductsResponse = Response<ProductMetaData>;

export const getProducts = async () => {
  let result = await apiClient.get<ProductsResponse>(``);

  // if got error, get from dummy data
  if (result.request.status !== 200)
    result = await axios.get<ProductsResponse>("/api");

  return result.data.data;
};
