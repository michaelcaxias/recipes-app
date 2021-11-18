import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router';
import Loading from '../components/Loading';
import IngredientsMeasureList from '../components/IngredientsMeasureList';
import MapRecommendation from '../components/MapRecommendation';
import recipesContext from '../context/recipesContext';
import '../styles/foodAndDrinksDetails.css';
import ShareButton from '../components/ShareButton';
import Video from '../components/Video';
import FavoriteButton from '../components/FavoriteButton';

export default function FoodId() {
  const history = useHistory();
  const { id } = useParams();

  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }

  if (!localStorage.getItem('inProgressRecipes')) {
    localStorage
      .setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
  }

  const [foodId, setFoodId] = useState();
  const [recomendedDrink, setRecomendedDrink] = useState();
  const [viewBtn, setViewBtn] = useState(false);

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const { getIngredients } = useContext(recipesContext);

  const startRecipe = () => {
    const updateInProgressRecipes = {
      ...inProgressRecipes,
      meals: { ...inProgressRecipes.meals, [id]: [] },
    };
    console.log(updateInProgressRecipes);
    localStorage.setItem('inProgressRecipes', JSON.stringify(updateInProgressRecipes));
    history.push(`/comidas/${id}/in-progress`);
  };

  // 'https://www.themealdb.com/api/json/v1/1/search.php?s='

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
      const recomendedMealURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const request = await fetch(recomendedMealURL);
      const response = await request.json();
      setRecomendedDrink(response.drinks);
    }
    requestRecommendedMeal();
  }, []);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!doneRecipes.some((item) => item.id === id)) {
      setViewBtn(true);
    }
  }, [id]);

  function renderBtn() {
    const searchItem = Object.keys(inProgressRecipes.meals).some((idKey) => idKey === id);
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

  if (!foodId) {
    return <Loading />;
  }

  return (
    <div>
      {getIngredients(foodId)}
      <section className="container-thumb">
        <img
          data-testid="recipe-photo"
          alt="recipe"
          src={ foodId.strMealThumb }
          className="thumb-recipe"
        />
      </section>
      <section className="header-recipe">
        <div>
          <p data-testid="recipe-category" className="category">
            {foodId.strCategory}
          </p>
          <h1 data-testid="recipe-title">{foodId.strMeal}</h1>
        </div>
        <div className="buttons">
          <ShareButton />
          <FavoriteButton favorite={ foodId } type="comida" />
        </div>
      </section>
      <section className="instructions-recipe">
        <h3>Ingredientes</h3>
        <IngredientsMeasureList ingredients={ foodId } />
        <h3>Modo de Preparo</h3>
        <p data-testid="instructions">{foodId.strInstructions}</p>
        <Video comida={ foodId } />
      </section>
      <section className="recommendation-container">
        <MapRecommendation type="bebidas" data={ recomendedDrink } />
      </section>
      { viewBtn ? renderBtn() : '' }
    </div>
  );
}
