"use client";

import Header from "@/app/components/Header";
import LastUpdated from "@/app/components/LastUpdated";
import ProductList from "@/app/components/ProductList";
import Title from "@/app/components/Title";
import { useProducts } from "@/hooks/useProducts";

export default function LandingPage() {
  const { data, isLoading } = useProducts();

  return (
    <>
      <Header />
      <div className="pl-[90px] pr-[82px] py-[48px] max-w-[1440px] mx-auto">
        <Title
          title={data?.title ?? ""}
          description={data?.description ?? ""}
        />
        <div className="mt-[32px]">
          <LastUpdated updated_at={data?.updated_at ?? ""} />
        </div>
        <div className="mt-[32px] space-y-4">
          <ProductList isLoading={isLoading} products={data?.products ?? []} />
        </div>
      </div>
    </>
  );
}
