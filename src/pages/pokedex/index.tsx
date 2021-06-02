import { navigate } from 'hookrouter';
import React, { useRef, useState } from 'react';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemonCard';
import useData from '../../hook/useData';
import UseDebounce from '../../hook/useDebounce';
import { PokemonCardProps } from '../../interface/PokemonCardProps';
import { DataProps } from '../../interface/pokemons';
import { LinkEnum } from '../../routes';
import style from './pokedex.module.scss';

export interface IQuery {
  name?: string;
  attack_from?: string | null;
  attack_to?: string;
}

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const attackFrom = React.useRef<HTMLInputElement>(null);
  const attackTo = React.useRef<HTMLInputElement>(null);
  const limit = React.useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = UseDebounce(searchValue, 700);

  const { data, isLoading, isError } = useData<DataProps>('getPokemons', query, [
    debouncedValue,
    query.attack_from,
    query.attack_to,
  ]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const handleAttackFromChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuery((state: IQuery) => ({
      ...state,
      limit: limit?.current?.value,
      attack_from: attackFrom?.current?.value,
      attack_to: attackTo?.current?.value,
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
        <form className={style.filter}>
          <label>Limit:</label>
          <input type="text" ref={limit} />
          <br />
          <label>Attack from:</label>
          <input type="text" ref={attackFrom} />
          <label>to:</label>
          <input type="text" ref={attackTo} />
          <button onClick={handleAttackFromChange}>Accept</button>
        </form>
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
