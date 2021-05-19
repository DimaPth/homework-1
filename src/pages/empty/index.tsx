import React from 'react';
import Header from '../../components/header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>Empty page {title}</div>
    </div>
  );
};

export default EmptyPage;
