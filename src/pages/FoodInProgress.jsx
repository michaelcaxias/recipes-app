import React, { useEffect, useState } from 'react';
// import IngredientListProgress from '../components/IngredientListProgress';
// import recipesContext from '../context/recipesContext';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import ShareButton from './ShareButton';

export default function FoodInProgress() {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

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
    return <Loading />;
  }

  return (
    <section>
      Food in progress
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
    </section>
  );
}
