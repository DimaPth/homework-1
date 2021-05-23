import { useRoutes } from 'hookrouter';
import React from 'react';
import Header from './components/header';
import NotFound from './pages/notFound';
import { routes } from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
