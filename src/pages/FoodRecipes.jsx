import React, { useContext } from 'react';
import CategoryButtonsMeals from '../components/CategoryButtonsMeals';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import recipesContext from '../context/recipesContext';
import '../styles/foodAndDrinks.css';

const MAX_RECIPES = 12;

export default function FoodRecipes() {
  const { meals, setMeals } = useContext(recipesContext);

  return (
    <section>
      <Header title="Comidas" searchButton />
      <CategoryButtonsMeals setData={ setMeals } />
      <section className="cards-container">
        { meals && meals
          .slice(0, MAX_RECIPES).map(({ strMealThumb, strMeal, idMeal }, index) => (
            <RecipeCard
              key={ index }
              image={ strMealThumb }
              id={ idMeal }
              index={ index }
              name={ strMeal }
              page="comidas"
            />
          )) }
      </section>
      <FooterMenu />
    </section>
  );
}
