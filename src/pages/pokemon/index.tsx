import React from 'react';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import style from './pokemon.module.scss';
import cn from 'classnames';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  return (
    <Layout className={style.root}>
      <div className={style.contentWrap}>
        <div className={style.contentImg}>
          <img
            src="https:\/\/raw.githubusercontent.com\/PokeAPI\/sprites\/master\/sprites\/pokemon\/other\/official-artwork\/4.png"
            alt="dragon"
          />
        </div>
        <div className={style.contentStats}>
          <div className={style.contentTitle}>
            <Heading level="3">Charmander</Heading>
            <span>Generation 1</span>
          </div>
          <div className={cn(style.bgWhite, style.abilitiesWrap)}>
            <span>Abilities</span>
            <span>Overgrow - Chlorophyll</span>
          </div>
          <div className={cn(style.bgWhite, style.hp)}>
            <div>
              <div>Healthy Points</div>
              <div>1 000 000</div>
              <progress max="100" value="25"></progress>
            </div>
            <div>
              <div>Experience</div>
              <div>1 000 000</div>
              <progress max="100" value="25"></progress>
            </div>
          </div>
          <div className={style.statsWrap}>
            <div className={cn(style.bgWhite, style.stats)}>
              <div>100</div>
              <span>Defense</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div>100</div>
              <span>Attack</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div>100</div>
              <span>Sp Attack</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div>100</div>
              <span>Sp Defense</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pokemon;
