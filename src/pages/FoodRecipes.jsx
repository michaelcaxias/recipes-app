import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import recipesContext from '../context/recipesContext';

const MAX_RECIPES = 12;

export default function FoodRecipes() {
  const { data } = useContext(recipesContext);
  return (
    <div>
      <Header title="Comidas" />
      { data.slice(0, MAX_RECIPES).map(({ strMealThumb, strMeal }, index) => (
        <RecipeCard
          key={ index }
          image={ strMealThumb }
          index={ index }
          name={ strMeal }
        />
      )) }
    </div>
  );
}
