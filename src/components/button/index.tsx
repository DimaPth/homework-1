import React from 'react';
import cn from 'classnames';
import style from './button.module.scss';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string;
  color?: 'green' | 'yellow';
  size?: 'normal' | 'small';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color = 'green', size = 'normal', fullWidth = false }) => {
  return (
    <button
      type="button"
      className={cn(style.root, style[color], style[size], { [style.fullWidth]: fullWidth })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
