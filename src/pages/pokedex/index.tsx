import React from 'react';
import Header from '../../components/header';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemonCard';
import style from './pokedex.module.scss';
import { pokemons } from '../../pokemons';

interface PokedexPageProps {
  title: string;
}

const PokedexPage: React.FC<PokedexPageProps> = () => {
  return (
    <div className={style.root}>
      <Header />
      <Layout className={style.contentWrap}>
        <Heading level="3" className={style.contentHeading}>
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          {pokemons.map((item) => {
            return <PokemonCard pokemon={item} key={item.id} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
