import React, { useState, useEffect, useContext } from 'react';
import CategoryButtonsDrinks from '../components/CategoryButtonsDrinks';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import recipesContext from '../context/recipesContext';
import '../styles/foodAndDrinks.css';
// import requestRecipes from '../helpers/requestRecipes';

const MAX_RECIPES = 12;
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const key = 'drinks';

export default function Drinks() {
  const { data } = useContext(recipesContext);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    setDrinks(data);
  }, [data]);

  useEffect(() => {
    async function requestCategories() {
      const request = await fetch(url);
      const response = await request.json();
      setDrinks(response[key]);
    }
    requestCategories();
  }, []);

  return (
    <section>
      <Header title="Bebidas" searchButton />
      <CategoryButtonsDrinks />
      <section className="cards-container">
        { drinks && drinks
          .slice(0, MAX_RECIPES).map(({ strDrinkThumb, strDrink, idDrink }, index) => (
            <RecipeCard
              key={ index }
              image={ strDrinkThumb }
              id={ idDrink }
              index={ index }
              name={ strDrink }
            />
          )) }
      </section>
      <FooterMenu />
    </section>
  );
}
