import { Serie } from "@/interfaces/series";
import Layout from "@/layouts/Layout";
import { getSeries } from "@/services/getSeries";
import { GetServerSideProps, NextPage } from "next";

interface SeriesPageProps {
  series: Serie[];
}

const SeriesPage: NextPage<SeriesPageProps> = ({ series }) => {
  return (
    <Layout
      title="Series"
      description="List of all series of amiibos."
      keywords="amiibo, series, list, all, amiiboseries, amiibo series."
    >
      <section className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Series</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {series.map((serie) => (
            <div key={serie.key} className="bg-slate-700/45 p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">{serie.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({req,res}) => {

  const series = await getSeries();
//esta cabecera permite que la pagina sea cacheada por el cdn de vercel por 60seg
res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
  return {
    props: {
      series,
    },
  };
};

export default SeriesPage;
