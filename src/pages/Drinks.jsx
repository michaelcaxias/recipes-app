import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import recipesContext from '../context/recipesContext';

const MAX_RECIPES = 12;

export default function Drinks() {
  const { data } = useContext(recipesContext);
  return (
    <div>
      <Header title="Bebidas" />
      { data.slice(0, MAX_RECIPES).map(({ strDrinkThumb, strDrink }, index) => (
        <RecipeCard
          key={ index }
          image={ strDrinkThumb }
          index={ index }
          name={ strDrink }
        />
      )) }
    </div>
  );
}
