/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import requestRecipes from '../helpers/requestRecipes';
import recipesContext from '../context/recipesContext';

const MAX_RECIPES = 12;
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const key = 'meals';

export default function FoodRecipes() {
  const { data, setData } = useContext(recipesContext);
  useEffect(() => {
    requestRecipes(url, setData, key);
  }, []);

  const recipes = data ? data.slice(0, MAX_RECIPES) : [];
  return (
    <section>
      <Header title="Comidas" />
      Receitas de comida
      { recipes.map(({ strMealThumb, strMeal }, index) => (
        <RecipeCard
          key={ index }
          image={ strMealThumb }
          index={ index }
          name={ strMeal }
        />
      )) }
      <FooterMenu />
    </section>
  );
}
