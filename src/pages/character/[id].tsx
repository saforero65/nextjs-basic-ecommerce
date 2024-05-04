import Card from "@/components/common/Card";
import type { Character } from "@/interfaces";
import Layout from "@/layouts/Layout";
import { getCharacters } from "@/services/getChaaracters";
import { getCharacter } from "@/services/getCharacter";
import { GetStaticProps, NextPage } from "next";

interface CharacterPageProps {
  character: Character;
}

const CharacterPage: NextPage<CharacterPageProps> = ({ character }) => {
  
  return (
    <Layout
      title={character?.name || "Ecommerce"}
      description={character?.gameSeries || "Ecommerce"}
      keywords={character?.amiiboSeries || "Ecommerce"}
    >
      {character && <Card character={character} />}
    </Layout>
  );
};

export default CharacterPage;

import { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
  const languages = locales as string[];
  const characters = await getCharacters();

  const paths = characters.flatMap((character: Character) => 
    languages.map((lang) => ({ params: { id: character.tail }, locale: lang }))
  );

  return {
    paths,
    fallback: false,
    
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id as string;
  const character = await getCharacter(id as string);

  return {
    props: {
      character,
    },
  };
}