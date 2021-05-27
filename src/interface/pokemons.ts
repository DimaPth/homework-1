import { PokemonCardProps } from './PokemonCardProps';

export interface DataProps {
  total: number;
  pokemons: PokemonCardProps[];
  count: number;
  limit: number;
  offset: number;
}
