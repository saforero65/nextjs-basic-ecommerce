import { Character } from "@/interfaces";
import Layout from "@/layouts/Layout";
import { getCharacters } from "@/services/getChaaracters";
import { GetStaticProps, NextPage } from "next";
import { Inter, Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
interface HomePageProps {
  characters: Character[];
}

const HomePage: NextPage<HomePageProps> = ({ characters }) => {
  return (
    <Layout
      title="Ecommerce"
      description="Ecommerce"
      keywords="Ecommerce, Nextjs, Tailwindcss, Typescript"
    >
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${raleway.className}`}
      >
        <h1>Ecommerce</h1>
        <section className="grid grid-cols-3 gap-4">
          {characters.map((item) => (
            <div
              key={item.tail}
              className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-md"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <h2>{item.name}</h2>
              <p>{item.tail}</p>

              <Link
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                href={`/character/${item.tail}`}
              >
                Ver más
              </Link>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const characters = await getCharacters();

  return {
    props: {
      characters,
    },
  };
};
