import React from 'react';
import Heading from '../heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  [pokemon: string]: any;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
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
          <span className={s.label}>{pokemon.types[0]}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name_clean} />
      </div>
    </div>
  );
};

export default PokemonCard;
