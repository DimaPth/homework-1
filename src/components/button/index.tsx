import React from 'react';
import cn from 'classnames';
import style from './button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = null }) => {
  return (
    <button type="button" className={cn(style.root, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
