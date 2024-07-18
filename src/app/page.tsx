import Image from "next/image";
import Header from "./components/header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Top Ten</title>
      </Head>
      <Header />
    </div>
  );
}
