import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Perfil() {
  return (
    <section>
      <Header title="Perfil" searchButton={ false } />
      <h1 data-testid="profile-email">email@gmail.com</h1>
      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
      <FooterMenu />
    </section>
  );
}
