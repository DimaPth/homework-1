import React from 'react';
import cn from 'classnames';

import s from './layout.module.scss';

interface Icn {
  className?: string;
}

const Layout: React.FC<Icn> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;
