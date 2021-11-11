import React, { useState, useEffect } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Perfil() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const emailStorage = localStorage.getItem('user');
    if (emailStorage) {
      const { email } = JSON.parse(emailStorage);
      setUserEmail(email);
    }
  }, []);

  return (
    <section>
      <Header title="Perfil" searchButton={ false } />
      <h1 data-testid="profile-email">{ userEmail }</h1>
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
