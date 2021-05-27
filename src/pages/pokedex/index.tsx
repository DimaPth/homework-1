import { navigate } from 'hookrouter';
import React, { useState } from 'react';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemonCard';
import useData from '../../hook/getData';
import UseDebounce from '../../hook/useDebounce';
import { PokemonCardProps } from '../../interface/PokemonCardProps';
import { DataProps } from '../../interface/pokemons';
import { LinkEnum } from '../../routes';
import style from './pokedex.module.scss';

export interface IQuery {
  name?: string;
}

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = UseDebounce(searchValue, 700);

  const { data, isLoading, isError } = useData<DataProps>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <Heading level="3" className={style.contentHeading}>
          {!isLoading && data && data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input
            className={style.searchBar}
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Encuentra tu pokémon..."
          />
        </div>
        <div className={style.pokemonWrap}>
          {!isLoading &&
            data &&
            data?.pokemons.map((pokemon: PokemonCardProps) => {
              return (
                <PokemonCard
                  pokemon={pokemon}
                  key={pokemon.id}
                  onClick={() => navigate(`${LinkEnum.POKEDEX}/${pokemon.id}`)}
                />
              );
            })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
