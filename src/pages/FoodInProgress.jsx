import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IngredientListProgress from '../components/IngredientListProgress';
// import recipesContext from '../context/recipesContext';
import Loading from '../components/Loading';
import ShareButton from '../components/ShareButton';

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

  // function localProgressRecipe() {
  //   if (!localStorage.getItem('inProgressRecipes')) {
  //     localStorage
  //       .setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
  //   }
  // }

  if (!recipe) {
    return <Loading />;
  }

  return (
    <section>
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
        <IngredientListProgress ingredients={ recipe } />
      </div>
      <div>
        <p data-testid="instructions">{ recipe.strInstructions }</p>
      </div>
      <div>
        <button
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finalizar receita
        </button>
      </div>
    </section>
  );
}
