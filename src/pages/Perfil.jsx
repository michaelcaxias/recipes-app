import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import logo from '../images/Logo.svg';
import '../styles/perfil.css';

export default function Perfil() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    history.push('/');
  };

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
      <section className="perfil-section">
        <section>
          <img src={ logo } alt="logo perfil" />
          <h1 data-testid="profile-email">{ userEmail }</h1>
        </section>
        <section className="buttons-section">
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
            onClick={ logout }
          >
            Sair
          </button>
        </section>
      </section>

      <FooterMenu />
    </section>
  );
}
