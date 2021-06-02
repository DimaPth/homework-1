import React from 'react';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import style from './pokemon.module.scss';
import cn from 'classnames';
import useData from '../../hook/useData';
import { PokemonCardProps } from '../../interface/PokemonCardProps';
import { toCapitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

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
        <div className={cn(style.contentImg, style[data?.types[0] as keyof typeof style])}>
          <img src={data?.img} alt={data?.name_clean} />
          {data?.types.map((type) => {
            return (
              <div className={cn(style.types, style[type as keyof typeof style])}>{toCapitalizeFirstLetter(type)}</div>
            );
          })}
        </div>
        <div className={style.contentStats}>
          <div className={style.contentTitle}>
            <Heading level="3">{toCapitalizeFirstLetter(data?.name)}</Heading>
            <div className={style.generationWrap}>
              <span>Generation 1</span>
              <div className={style.id}>
                <span>{data?.id}</span>
              </div>
            </div>
          </div>
          <div className={cn(style.bgWhite, style.abilitiesWrap)}>
            <span>Abilities:</span>
            <span>{toCapitalizeFirstLetter(data?.abilities.join(', '))}</span>
          </div>
          <div className={cn(style.bgWhite, style.expAndHp)}>
            <div>
              <div>Healthy Points</div>
              <div>
                <strong>{data?.stats['hp']}</strong>
              </div>
              <progress max="100" value={data?.stats['hp']}></progress>
            </div>
            <div>
              <div>Experience</div>
              <div>
                <strong>{data?.base_experience}</strong>
              </div>
              <progress max="300" value={data?.base_experience}></progress>
            </div>
          </div>
          <div className={style.statsWrap}>
            <div className={cn(style.bgWhite, style.stats)}>
              <div className={style.stat}>
                <div>{data?.stats['defense']}</div>
              </div>
              <span>Defense</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div className={style.stat}>
                <div>{data?.stats['attack']}</div>
              </div>
              <span>Attack</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div className={style.stat}>
                <div>{data?.stats['special-attack']}</div>
              </div>
              <span>Sp Attack</span>
            </div>
            <div className={cn(style.bgWhite, style.stats)}>
              <div className={style.stat}>
                <div>{data?.stats['special-defense']}</div>
              </div>
              <span>Sp Defense</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pokemon;
