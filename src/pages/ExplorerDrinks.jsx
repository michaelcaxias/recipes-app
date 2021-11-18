import React from 'react';
import { useHistory } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import '../styles/buttonsGroup.css';

export default function ExplorerDrinks() {
  const history = useHistory();

  const handleSurpriseButton = async () => {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const resolve = await request.json();
    const { drinks } = resolve;
    history.push(`/bebidas/${drinks[0].idDrink}`);
  };

  return (
    <section>
      <Header title="Explorar Bebidas" searchButton={ false } />
      <section className="buttons-group">
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
          onClick={ handleSurpriseButton }
        >
          Me Surpreenda!
        </button>
      </section>
      <FooterMenu />
    </section>
  );
}
