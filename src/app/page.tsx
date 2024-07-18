import Image from "next/image";
import Header from "./components/header";
import Head from "next/head";
import Title from "./components/title";
import LastUpdated from "./components/last_updated";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Top Ten</title>
      </Head>
      <div className="max-w-[1440px]">
        <Header />
        <div className="px-[90px] py-[48px]">
          <Title />
          <div className="mt-[32px]">
            <LastUpdated />
          </div>
        </div>
      </div>
    </div>
  );
}
