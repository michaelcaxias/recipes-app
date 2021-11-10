import React, { useEffect, useState, useContext } from 'react';
import CategoryButtonsMeals from '../components/CategoryButtonsMeals';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
// import requestRecipes from '../helpers/requestRecipes';
import recipesContext from '../context/recipesContext';
import '../styles/foodAndDrinks.css';

const MAX_RECIPES = 12;
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const key = 'meals';

export default function FoodRecipes() {
  const { data } = useContext(recipesContext);

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(data);
  }, [data]);

  useEffect(() => {
    async function requestCategories() {
      const request = await fetch(url);
      const response = await request.json();
      setMeals(response[key]);
    }
    requestCategories();
  }, []);

  return (
    <section>
      <Header title="Comidas" searchButton />
      <CategoryButtonsMeals />
      <section className="cards-container">
        { meals && meals
          .slice(0, MAX_RECIPES).map(({ strMealThumb, strMeal, idMeal }, index) => (
            <RecipeCard
              key={ index }
              image={ strMealThumb }
              id={ idMeal }
              index={ index }
              name={ strMeal }
            />
          )) }
      </section>
      <FooterMenu />
    </section>
  );
}
