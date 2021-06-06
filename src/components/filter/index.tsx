import React, { Dispatch, SetStateAction } from 'react';
import { IQuery } from '../../pages/pokedex';
import Button from '../button';
import style from './filter.module.scss';

interface FilterProps {
  setQuery: Dispatch<SetStateAction<IQuery>>;
}

const Filter: React.FC<FilterProps> = ({ setQuery }) => {
  const attackFrom = React.useRef<HTMLInputElement>(null);
  const attackTo = React.useRef<HTMLInputElement>(null);
  const limit = React.useRef<HTMLInputElement>(null);

  const handleAttackFromChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuery((state: IQuery) => ({
      ...state,
      limit: limit?.current?.value,
      attack_from: attackFrom?.current?.value,
      attack_to: attackTo?.current?.value,
    }));
  };

  return (
    <form className={style.filter}>
      <div>
        <label>Limit:</label>
        <input type="text" ref={limit} />
      </div>
      <div>
        <label>Attack from:</label>
        <input type="text" ref={attackFrom} />
        <label>to:</label>
        <input type="text" ref={attackTo} />
      </div>
      <Button color="yellow" size="small" onClick={handleAttackFromChange}>
        Accept
      </Button>
    </form>
  );
};

export default Filter;
