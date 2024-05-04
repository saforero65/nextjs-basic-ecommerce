import { Faq } from "@/interfaces/faq";
import Layout from "@/layouts/Layout";
import { getFaqs } from "@/services/getFaqs";
import { GetStaticProps, NextPage } from "next";

interface FaqPageProps {
  faqs: Faq[];
}

const FaqsPage: NextPage<FaqPageProps> = ({ faqs }) => {
  return (
    <Layout
      title="Preguntas frecuentes"
      description="Preguntas frecuentes de la aplicación"
      keywords="faqs, preguntas frecuentes"
    >
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">Preguntas frecuentes</h1>
        <ul className="space-y-4 mt-4">
          {faqs.map((faq) => (
            <li key={faq.id} className="border p-4 rounded shadow bg-gray-50/15">
              <h2 className="text-lg font-bold">{faq.question}</h2>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const faqs = await getFaqs();
  return {
    props: {
      faqs,
    },
  };
};

export default FaqsPage;
