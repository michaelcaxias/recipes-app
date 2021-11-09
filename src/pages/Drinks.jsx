/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import recipesContext from '../context/recipesContext';
import requestRecipes from '../helpers/requestRecipes';
import '../styles/foodAndDrinks.css';

const MAX_RECIPES = 12;
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const key = 'drinks';

export default function Drinks() {
  const { data, setData } = useContext(recipesContext);

  useEffect(() => {
    requestRecipes(url, data, setData, key);
  }, []);
  return (
    <section>
      <Header title="Bebidas" />
      <section className="cards-container">
        { data && data.slice(0, MAX_RECIPES).map(({ strDrinkThumb, strDrink }, index) => (
          <RecipeCard
            key={ index }
            image={ strDrinkThumb }
            index={ index }
            name={ strDrink }
          />
        )) }
      </section>
      <FooterMenu />
    </section>
  );
}
