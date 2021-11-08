import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Explorer() {
  return (
    <section>
      <Header title="Explorar" searchButton={ false } />
      <FooterMenu />
    </section>
  );
}
