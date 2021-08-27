import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header */}
      <Header />
      {/*Banner */}
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>
          {/* Pull some data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, id) => (
              <SmallCard
                key={id}
                image={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h1 className="text-4xl font-semibold py-8">Live Anywhere</h1>
          {/* Pull some data from server */}
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData.map((item, id) => (
              <MediumCard key={id} image={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            image="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
