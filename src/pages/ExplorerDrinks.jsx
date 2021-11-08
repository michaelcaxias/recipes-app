import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function ExplorerDrinks() {
  return (
    <section>
      <Header title="Explorar Bebidas" searchButton={ false } />
      <FooterMenu />
    </section>
  );
}
