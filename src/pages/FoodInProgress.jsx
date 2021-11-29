import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IngredientListProgress from '../components/IngredientListProgress';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';
import '../styles/foodAndDrinksDetails.css';
import FavoriteButton from '../components/FavoriteButton';

export default function FoodInProgress() {
  const [recipe, setRecipe] = useState();
  const [isFinished, setIsFinished] = useState(false);
  const [ingredientsLength, setIngredientsLength] = useState(0);
  const { id } = useParams();

  if (!localStorage.getItem('ingredientsInProgress')) {
    localStorage.setItem('ingredientsInProgress', JSON.stringify([]));
  }

  useEffect(() => () => {
    localStorage.removeItem('ingredientsInProgress');
  }, []);

  useEffect(() => {
    async function requestRecipe() {
      const recipeURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const request = await fetch(recipeURL);
      const response = await request.json();
      console.log(response.meals);
      setRecipe(response.meals[0]);
    }
    requestRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <section style={ { height: '80vh' } }>
        <Loading />
      </section>
    );
  }

  function checkProgress() {
    const progress = JSON.parse(localStorage.getItem('ingredientsInProgress'));
    return progress.length === ingredientsLength ? setIsFinished(true) : null;
  }

  return (
    <section>
      <div className="container-thumb">
        <img
          data-testid="recipe-photo"
          className="thumb-recipe"
          src={ recipe.strMealThumb }
          alt={ recipe.strMealThumb }
        />
      </div>
      <section className="header-recipe">
        <div>
          <span
            data-testid="recipe-category"
            className="category"
          >
            {recipe.strCategory}
          </span>
          <h3 data-testid="recipe-title">{ recipe.strMeal }</h3>
        </div>
        <div className="buttons">
          <ShareButton />
          <FavoriteButton favorite={ recipe } type="comida" />
        </div>
      </section>
      <div className="instructions-recipe">
        <IngredientListProgress
          ingredients={ recipe }
          tipo="meals"
          checkProgress={ checkProgress }
          setIngredientsLength={ setIngredientsLength }
        />
        <p data-testid="instructions">{ recipe.strInstructions }</p>
      </div>
      <button
        type="button"
        className="btnStartRecipe"
        data-testid="finish-recipe-btn"
        disabled={ !isFinished }
      >
        Finalizar receita
      </button>
    </section>
  );
}
