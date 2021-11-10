import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import IngredientsMeasureList from '../components/IngredientsMeasureList';

export default function DrinksId() {
  const { id } = useParams();

  const [bebidaId, setBebidaId] = useState();
  const [recomendedDrink, setRecomendedDrink] = useState();

  useEffect(() => {
    async function requestID() {
      const UrlID = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const resquestID = await fetch(UrlID);
      const response = await resquestID.json();
      console.log(response.drinks);
      setBebidaId(response.drinks[0]);
    }
    requestID();
  }, [id]);

  useEffect(() => {
    async function requestRecomendedDrink() {
      const recomendedDrinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const request = await fetch(recomendedDrinkURL);
      const response = await request.json();
      console.log(response);
      setRecomendedDrink(response.drinks);
    }
    requestRecomendedDrink();
  }, []);

  if (!bebidaId) {
    return <Loading />;
  }

  return (
    <div>
      { console.log(recomendedDrink) }
      <img data-testid="recipe-photo" alt="recipe" src={ bebidaId.strDrinkThumb } />
      <h1 data-testid="recipe-title">{bebidaId.strDrink}</h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritos</button>
      <p data-testid="recipe-category">{bebidaId.strCategory}</p>
      <h3>Ingredientes</h3>
      <IngredientsMeasureList ingredients={ bebidaId } />
      <h3>Modo de Preparo</h3>
      <p data-testid="instructions">{bebidaId.strInstructions}</p>
      <div data-testid="recomendation-card">
        Card_de_receitas_recomentadas
      </div>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}
