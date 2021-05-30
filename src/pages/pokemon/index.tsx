import React from 'react';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import style from './pokemon.module.scss';
import cn from 'classnames';
import useData from '../../hook/useData';
import { PokemonCardProps } from '../../interface/PokemonCardProps';
import { Stats } from 'webpack';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonCardProps>('getPokemonById', { id });
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout className={style.root}>
      <div className={style.contentWrap}>
        <div className={style.contentImg}>
          <img src={data?.img} alt={data?.name_clean} />
        </div>
        <div className={style.contentStats}>
          <div className={style.contentTitle}>
            <Heading level="3">{data?.name}</Heading>
            <span>Generation 1</span>
          </div>
          <div className={cn(style.bgWhite, style.abilitiesWrap)}>
            <span>Abilities:</span>
            <span>{data?.abilities.join(', ')}</span>
          </div>
          <div className={cn(style.bgWhite, style.hp)}>
            <div>
              <div>Healthy Points</div>
              <div>{data?.stats['hp']}</div>
              <progress max="100" value="25"></progress>
            </div>
            <div>
              <div>Experience</div>
              <div>{data?.base_experience}</div>
              <progress max="100" value="25"></progress>
            </div>
          </div>
          <div className={style.statsWrap}>
            <div className={cn(style.bgWhite, style.stats)}>
              <div>{data?.stats['defense']}</div>
              <span>Defense</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div>{data?.stats['attack']}</div>
              <span>Attack</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div>{data?.stats['special-attack']}</div>
              <span>Sp Attack</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div>{data?.stats['special-defense']}</div>
              <span>Sp Defense</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pokemon;
