import React from 'react';

import style from './header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '../../routes';
import cn from 'classnames';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const Header = () => {
  const path = usePath();
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={style.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              className={cn(style.menuLink, {
                [style.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
