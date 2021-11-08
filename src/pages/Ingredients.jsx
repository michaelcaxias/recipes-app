import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Ingredients() {
  return (
    <section>
      <Header title="Explorar Ingredientes" searchButton={ false } />
      <FooterMenu />
    </section>
  );
}
