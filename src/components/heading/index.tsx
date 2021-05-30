import React from 'react';
import cn from 'classnames';

interface Iheading {
  level?: '1' | '2' | '3' | '4' | '5' | '6';
  className?: string;
}

const Heading: React.FC<Iheading> = ({ children, level = '1', className = null }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={cn(className)}>{children}</Tag>;
};

export default Heading;
