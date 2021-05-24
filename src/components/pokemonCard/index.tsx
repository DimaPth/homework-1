import React from 'react';
import Heading from '../heading';
import cn from 'classnames';

import s from './PokemonCard.module.scss';
import { PokemonCardProps } from './PokemonCardProps';

export interface IPokemon {
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
          {pokemon.types.map((type) => {
            return (
              <span key={type} className={cn(s.label, s[type as keyof typeof s])}>
                {type}
              </span>
            );
          })}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[pokemon.types[0] as keyof typeof s])}>
        <img src={pokemon.img} alt={pokemon.name_clean} />
      </div>
    </div>
  );
};

export default PokemonCard;
