/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import requestRecipes from '../helpers/requestRecipes';
import recipesContext from '../context/recipesContext';
import '../styles/foodAndDrinks.css';

const MAX_RECIPES = 12;
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const key = 'meals';

export default function FoodRecipes() {
  const { data, setData } = useContext(recipesContext);
  useEffect(() => {
    requestRecipes(url, data, setData, key);
  }, []);

  return (
    <section>
      <Header title="Comidas" />
      Receitas de comida
      <section className="cards-container">
        { data && data.slice(0, MAX_RECIPES).map(({ strMealThumb, strMeal }, index) => (
          <RecipeCard
            key={ index }
            image={ strMealThumb }
            index={ index }
            name={ strMeal }
          />
        )) }
      </section>
      <FooterMenu />
    </section>
  );
}
