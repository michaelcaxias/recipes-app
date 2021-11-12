import React from 'react';
import { useHistory } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function ExplorerDrinks() {
  const history = useHistory();
  return (
    <section>
      <Header title="Explorar Bebidas" searchButton={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explorar/bebidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Me Surpreenda!
      </button>
      <FooterMenu />
    </section>
  );
}
