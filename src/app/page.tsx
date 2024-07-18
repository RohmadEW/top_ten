import Image from "next/image";
import Header from "./components/header";
import Head from "next/head";
import Title from "./components/title";
import LastUpdated from "./components/last_updated";
import Card from "./components/card";
import { products } from "./types/product";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Top Ten</title>
      </Head>
      <div>
        <Header />
        <div className="px-[90px] py-[48px] max-w-[1440px] mx-auto">
          <Title />
          <div className="mt-[32px]">
            <LastUpdated />
          </div>
          <div className="mt-[32px] space-y-4">
            {products.map((product, index) => {
              return <Card key={index} number={index + 1} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
