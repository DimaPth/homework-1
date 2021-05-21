import React from 'react';
import style from './notFound.module.scss';
import Trio from './assets/trio.png';
import Button from '../../components/button';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

const NotFound = () => {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.text}>404</div>
        <div className={style.content}>
          <img src={Trio} alt="Trio" />
          <div className={style.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <Button color="yellow" onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
