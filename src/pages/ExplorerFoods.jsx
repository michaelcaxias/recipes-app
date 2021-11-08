import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function ExplorerFoods() {
  return (
    <section>
      <Header title="Explorar Comidas" searchButton={ false } />
      <FooterMenu />
    </section>
  );
}
