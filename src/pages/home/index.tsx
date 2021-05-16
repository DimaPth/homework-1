import React from 'react';
import Button from '../../components/button';
import Header from '../../components/header';
import Heading from '../../components/heading';
import Layout from '../../components/layout';
import Parallax from '../../components/parallax';

import style from './home.module.scss';

const HomePage = () => {
  return (
    <div className={style.root}>
      <Header />
      <Layout className={style.contentWrap}>
        <div className={style.contentText}>
          <Heading type="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button className={style.contentBtn} onClick={() => console.log('click')}>
            See pokemons
          </Button>
        </div>
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
