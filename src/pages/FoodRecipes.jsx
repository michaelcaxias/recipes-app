import React, { useEffect, useState } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import requestRecipes from '../helpers/requestRecipes';
// import recipesContext from '../context/recipesContext';

const MAX_RECIPES = 12;
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=miscellaneous';
const key = 'meals';

export default function FoodRecipes() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    requestRecipes(url, setMeals, key);
  }, []);

  // const { data } = useContext(recipesContext);
  const recipes = meals ? meals.slice(0, MAX_RECIPES) : [];
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
