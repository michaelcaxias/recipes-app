import React, { useContext } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import recipesContext from '../context/recipesContext';

const MAX_RECIPES = 12;

export default function Drinks() {
  const { data } = useContext(recipesContext);
  const recipes = data ? data.slice(0, MAX_RECIPES) : [];
  return (
    <section>
      <Header title="Bebidas" />
      { recipes.map(({ strDrinkThumb, strDrink }, index) => (
        <RecipeCard
          key={ index }
          image={ strDrinkThumb }
          index={ index }
          name={ strDrink }
        />
      )) }
      <FooterMenu />
    </section>
  );
}