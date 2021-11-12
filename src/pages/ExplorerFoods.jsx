import React from 'react';
import { useHistory } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function ExplorerFoods() {
  const history = useHistory();
  return (
    <section>
      <Header title="Explorar Comidas" searchButton={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Por Local de Origem
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
