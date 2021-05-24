import React, { useEffect, useState } from 'react';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import PokemonCard, { IPokemon } from '../../components/pokemonCard';
import { PokemonCardProps } from '../../components/pokemonCard/PokemonCardProps';
import req from '../../utils/request';
import style from './pokedex.module.scss';

interface DataProps {
  total: number;
  pokemons: PokemonCardProps[];
  count: number;
  limit: number;
  offset: number;
}

interface PokedexPageProps {
  title: string;
}

const usePokemons = () => {
  const [data, setData] = useState<DataProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC<PokedexPageProps> = () => {
  const { data, isLoading, isError } = usePokemons();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <Heading level="3" className={style.contentHeading}>
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={style.pokemonWrap}>
          {data?.pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
