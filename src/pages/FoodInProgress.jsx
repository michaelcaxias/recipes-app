import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IngredientListProgress from '../components/IngredientListProgress';
// import recipesContext from '../context/recipesContext';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';

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

  // if (recipe !== undefined) {
  //   const arrayKeys = Object.keys(recipe);
  //   setIngredietValues(arrayKeys.filter((key) => key.includes('strIngredient')));
  // }

  if (!recipe) {
    return <Loading />;
  }
  // const arrayKeys = Object.keys(recipe);
  // setIngredietValues(arrayKeys.filter((key) => key.includes('strIngredient')));

  function checkProgress() {
    const progress = JSON.parse(localStorage.getItem('ingredientsInProgress'));
    console.log(progress);
    console.log(progress.length);
    return progress.length === ingredientsLength ? setIsFinished(true) : null;
  }

  return (
    <section>
      { console.log(recipe) }
      <div>
        <img
          data-testid="recipe-photo"
          src={ recipe.strMealThumb }
          alt={ recipe.strMealThumb }
        />
      </div>
      <div>
        <h3 data-testid="recipe-title">{ recipe.strMeal }</h3>
      </div>
      <div>
        <ShareButton />
        <button type="button" data-testid="favorite-btn">Favoritos</button>
      </div>
      <div>
        <span data-testid="recipe-category">{recipe.strCategory}</span>
      </div>
      <div>
        <IngredientListProgress
          ingredients={ recipe }
          checkProgress={ checkProgress }
          setIngredientsLength={ setIngredientsLength }
          // setIsFinished={ setIsFinished }
        />
      </div>
      <div>
        <p data-testid="instructions">{ recipe.strInstructions }</p>
      </div>
      <div>
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ !isFinished }
        >
          Finalizar receita
        </button>
      </div>
    </section>
  );
}
