import ProductList from "@/app/components/ProductList";
import { useProducts } from "@/hooks/useProducts";
import Header from "./components/Header";
import LastUpdated from "./components/LastUpdated";
import Title from "./components/Title";

export default function Home() {
  const { data, isLoading } = useProducts();

  return (
    <div>
      <div>
        <Header />
        <div className="pl-[90px] pr-[82px] py-[48px] max-w-[1440px] mx-auto">
          <Title
            title={data?.title ?? ""}
            description={data?.description ?? ""}
          />
          <div className="mt-[32px]">
            <LastUpdated />
          </div>
          <div className="mt-[32px] space-y-4">
            <ProductList products={data?.products ?? []} />
          </div>
        </div>
      </div>
    </div>
  );
}
