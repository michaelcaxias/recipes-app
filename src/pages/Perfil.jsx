import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Perfil() {
  return (
    <section>
      <Header title="Perfil" searchButton={ false } />
      <FooterMenu />
    </section>
  );
}
