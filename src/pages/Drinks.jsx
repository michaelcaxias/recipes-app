import React, { useState, useEffect } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
// import recipesContext from '../context/recipesContext';
import requestRecipes from '../helpers/requestRecipes';

const MAX_RECIPES = 12;
const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
const key = 'drinks';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    requestRecipes(url, setDrinks, key);
  }, []);

  // const { data } = useContext(recipesContext);
  const recipes = drinks ? drinks.slice(0, MAX_RECIPES) : [];
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
