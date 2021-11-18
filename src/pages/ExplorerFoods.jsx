import React from 'react';
import { useHistory } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import '../styles/buttonsGroup.css';

export default function ExplorerFoods() {
  const history = useHistory();

  const handleSurpriseButton = async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const resolve = await request.json();
    const { meals } = resolve;
    history.push(`/comidas/${meals[0].idMeal}`);
  };

  return (
    <section>
      <Header title="Explorar Comidas" searchButton={ false } />
      <section className="buttons-group">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explorar/comidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={ () => history.push('/explorar/comidas/area') }
        >
          Por Local de Origem
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
