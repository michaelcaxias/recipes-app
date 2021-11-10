import React, { useEffect, useState } from 'react';
import CategoryButtonsMeals from '../components/CategoryButtonsMeals';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
// import requestRecipes from '../helpers/requestRecipes';
// import recipesContext from '../context/recipesContext';

const MAX_RECIPES = 12;
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const key = 'meals';

export default function FoodRecipes() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function requestCategories() {
      const request = await fetch(url);
      const response = await request.json();
      setMeals(response[key]);
    }
    requestCategories();
  }, []);

  // const { data } = useContext(recipesContext);
  const recipes = meals ? meals.slice(0, MAX_RECIPES) : [];
  return (
    <section>
      <Header title="Comidas" searchButton />
      <CategoryButtonsMeals />
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
