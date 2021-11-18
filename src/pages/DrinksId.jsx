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

  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }

  if (!localStorage.getItem('inProgressRecipes')) {
    localStorage
      .setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
  }

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const [drinkId, setDrinkId] = useState();
  const [recomendedMeal, setRecomendedMeal] = useState();
  const [viewBtn, setViewBtn] = useState(false);

  const startRecipe = () => {
    const updateInProgressRecipes = {
      ...inProgressRecipes,
      cocktails: { ...inProgressRecipes.cocktails, [id]: [] },
    };
    console.log(updateInProgressRecipes);
    localStorage.setItem('inProgressRecipes', JSON.stringify(updateInProgressRecipes));
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
      setRecomendedMeal(response.meals);
    }
    requestRecomendedDrink();
  }, []);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!doneRecipes.some((item) => item.id === id)) {
      setViewBtn(true);
    }
  }, [id]);

  function renderBtn() {
    const searchItem = Object.keys(inProgressRecipes.cocktails)
      .some((idKey) => idKey === id);
    if (searchItem) {
      return (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="btnStartRecipe"
          onClick={ startRecipe }
        >
          Continuar Receita
        </button>
      );
    }
    return (
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="btnStartRecipe"
        onClick={ () => startRecipe() }
      >
        Iniciar Receita
      </button>
    );
  }

  if (!drinkId) {
    return (
      <section style={ { height: '80vh' } }>
        <Loading />
      </section>
    );
  }

  return (
    <div>
      <section className="container-thumb">
        <img
          data-testid="recipe-photo"
          alt="recipe"
          className="thumb-recipe"
          src={ drinkId.strDrinkThumb }
        />
      </section>
      <section className="header-recipe">
        <div>
          <p data-testid="recipe-category" className="category">
            {drinkId.strAlcoholic}
          </p>
          <h1 data-testid="recipe-title">{drinkId.strDrink}</h1>
        </div>
        <div className="buttons">
          <ShareButton />
          <FavoriteButton favorite={ drinkId } type="bebida" />
        </div>
      </section>
      <section className="instructions-recipe">
        <h3>Ingredientes</h3>
        <IngredientsMeasureList ingredients={ drinkId } />
        <h3>Modo de Preparo</h3>
        <p data-testid="instructions">{drinkId.strInstructions}</p>
      </section>
      <section className="recommendation-container">
        <MapRecommendation type="comidas" data={ recomendedMeal } />
      </section>
      { viewBtn ? renderBtn() : '' }
    </div>
  );
}
