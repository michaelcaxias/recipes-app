import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import Loading from '../components/Loading';
import IngredientsMeasureList from '../components/IngredientsMeasureList';
import MapRecommendation from '../components/MapRecommendation';
import '../styles/foodAndDrinksDetails.css';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

export default function DrinksId() {
  const history = useHistory();
  const { id } = useParams();

  const [drinkId, setDrinkId] = useState();
  const [recomendedDrink, setRecomendedDrink] = useState();
  const [isStarted, setStateRecipe] = useState(true);

  const startRecipe = () => {
    setStateRecipe(false);
    history.push(`/bebidas/${id}/in-progress`);
  };

  useEffect(() => {
    async function requestID() {
      const urlId = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const resquestID = await fetch(urlId);
      const response = await resquestID.json();
      console.log(response.drinks);
      setDrinkId(response.drinks[0]);
    }
    requestID();
  }, [id]);

  useEffect(() => {
    async function requestRecomendedDrink() {
      const recomendedDrinkURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const request = await fetch(recomendedDrinkURL);
      const response = await request.json();
      console.log(response);
      setRecomendedDrink(response.meals);
    }
    requestRecomendedDrink();
  }, []);

  if (!drinkId) {
    return <Loading />;
  }

  return (
    <div>
      {console.log(recomendedDrink)}
      <img
        data-testid="recipe-photo"
        alt="recipe"
        className="thumb-recipe"
        src={ drinkId.strDrinkThumb }
      />
      <h1 data-testid="recipe-title">{drinkId.strDrink}</h1>
      <ShareButton />
      <FavoriteButton favorite={ drinkId } type="bebida" />
      <p data-testid="recipe-category">{drinkId.strAlcoholic}</p>
      <h3>Ingredientes</h3>
      <IngredientsMeasureList ingredients={ drinkId } />
      <h3>Modo de Preparo</h3>
      <p data-testid="instructions">{drinkId.strInstructions}</p>
      <div className="recommenndation-container">
        <MapRecommendation type="comidas" data={ recomendedDrink } />
      </div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className={ isStarted ? 'btnStartRecipe' : 'btnStartRecipeHidden' }
        onClick={ startRecipe }
      >
        Iniciar Receita
      </button>
    </div>
  );
}
