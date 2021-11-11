import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router';
import Loading from '../components/Loading';
import IngredientsMeasureList from '../components/IngredientsMeasureList';
import MapRecommendation from '../components/MapRecommendation';
import recipesContext from '../context/recipesContext';
import '../styles/foodAndDrinksDetails.css';
import ShareButton from './ShareButton';
import Video from '../components/Video';

export default function FoodId() {
  const history = useHistory();
  const { id } = useParams();

  const [foodId, setFoodId] = useState();
  const [recomendedMeal, setRecomendedMeal] = useState();
  const [isStarted, setStateRecipe] = useState(true);

  const startText = 'Iniciar Receita';
  const continueText = 'Continuar Receita';

  const { getIngredients } = useContext(recipesContext);

  const startRecipe = () => {
    setStateRecipe(false);
    history.push(`/comidas/${id}/in-progress`);
    const foodName = foodId.strMeal;
    localStorage.setItem(foodName, true);
  };

  useEffect(() => {
    async function requestID() {
      const UrlID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const resquestID = await fetch(UrlID);
      const response = await resquestID.json();
      console.log(response.meals);
      setFoodId(response.meals[0]);
    }
    requestID();
  }, [id]);

  useEffect(() => {
    async function requestRecommendedMeal() {
      const recomendedMealURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const request = await fetch(recomendedMealURL);
      const response = await request.json();
      console.log(response);
      setRecomendedMeal(response.meals);
    }
    requestRecommendedMeal();
  }, []);

  if (!foodId) {
    return <Loading />;
  }

  return (
    <div>
      {getIngredients(foodId)}
      { console.log(recomendedMeal) }
      <img data-testid="recipe-photo" alt="recipe" src={ foodId.strMealThumb } />
      <h1 data-testid="recipe-title">{foodId.strMeal}</h1>
      <ShareButton />
      <button type="button" data-testid="favorite-btn">Favoritos</button>
      <p data-testid="recipe-category">{foodId.strCategory}</p>
      <h3>Ingredientes</h3>
      <IngredientsMeasureList ingredients={ foodId } />
      <h3>Modo de Preparo</h3>
      <p data-testid="instructions">{foodId.strInstructions}</p>
      <Video comida={ foodId } />
      <MapRecommendation type="comidas" data={ recomendedMeal } />
      <button
        type="button"
        data-testid="start-recipe-btn"
        className={ isStarted ? 'btnStartRecipe' : 'btnStartRecipeHidden' }
        onClick={ () => startRecipe() }
      >
        { localStorage.getItem(foodId.strMeal) ? continueText : startText }
      </button>
    </div>
  );
}
