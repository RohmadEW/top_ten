export interface ProductMetaData {
  _id: string;
  url_path: string;
  title: string;
  description: string;
  products: Product[];
  updated_at: Date;
  created_at: Date;
}

export interface Product {
  _id: string;
  productName: string;
  description: string;
  stars: number;
  pros: string;
  cons: string;
  amazon_link?: string;
  created_at: Date;
  "updated_at:": Date;
  walmart_link?: string;
  is_best_overall?: boolean;
}
