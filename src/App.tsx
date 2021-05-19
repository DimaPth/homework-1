import { useRoutes } from 'hookrouter';
import React from 'react';
import HomePage from './pages/home';
import NotFound from './pages/notFound';
import { routes } from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFound />;
};

export default App;
