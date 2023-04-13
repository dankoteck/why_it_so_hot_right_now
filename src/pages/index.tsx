import { type NextPage } from "next";
import Head from "next/head";

import Header from "@/components/Header";
import Sidebar from "@/components/Siderbar";
import { AirQualityWidget, WeatherWidget } from "@/features";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WISHRN - Khoa Le</title>
        <meta
          name="description"
          content="Why on earth the weather is so hot right now"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full w-full bg-white">
        <div className="flex h-full">
          <Sidebar />

          {/* Main Content */}
          <div className="grow p-12">
            <Header />
            <div className="mt-8 block gap-6 xl:flex">
              {/* Add widget here */}
              <WeatherWidget />
              <AirQualityWidget />
            </div>
          </div>

          {/* Additional Information */}
          <h1 className="w-96 bg-gray-100">Foo</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
