import React from 'react';
import Heading from '../heading';

import s from './PokemonCard.module.scss';

interface Stats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface PokemonCardProps {
  name_clean: string;
  abilities: string[];
  stats: Stats;
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface IPokemon {
  pokemon: PokemonCardProps;
}

const PokemonCard: React.FC<IPokemon> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading level="4" className={s.titleName}>
          {pokemon.name_clean}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats['attack']}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{pokemon.stats['defense']}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {pokemon.types.map((item) => {
            return <span className={s.label}>{item}</span>;
          })}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name_clean} />
      </div>
    </div>
  );
};

export default PokemonCard;
