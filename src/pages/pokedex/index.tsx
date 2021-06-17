import { navigate } from 'hookrouter';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/filter';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemonCard';
import useData from '../../hook/useData';
import UseDebounce from '../../hook/useDebounce';
import { PokemonCardProps } from '../../interface/PokemonCardProps';
import { DataProps } from '../../interface/pokemons';
import { LinkEnum } from '../../routes';
import { getPokemonTypes, getTypesAction, getPokemonTypesLoading } from '../../store/pokemon';
import style from './pokedex.module.scss';

export interface IQuery {
  name?: string;
  attack_from?: string | null;
  attack_to?: string;
  limit?: string;
}

const PokedexPage: React.FC = () => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonTypes);
  const isTypesLoading = useSelector(getPokemonTypesLoading);
  console.log(types);
  console.log(isTypesLoading);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = UseDebounce(searchValue, 700);

  const { data, isLoading, isError } = useData<DataProps>('getPokemons', query, [
    debouncedValue,
    query.limit,
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

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

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
        {/* <div>{isTypesLoading ? <span>loading...</span> : types?.map((item) => <div>{item}</div>)}</div> */}
        <Filter setQuery={setQuery} />
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
