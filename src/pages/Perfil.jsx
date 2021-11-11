import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Perfil() {
  const history = useHistory();
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
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
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
