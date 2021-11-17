import React, { useContext } from 'react';
import CategoryButtonsDrinks from '../components/CategoryButtonsDrinks';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import recipesContext from '../context/recipesContext';
import '../styles/foodAndDrinks.css';

const MAX_RECIPES = 12;

export default function Drinks() {
  const { drinks, setDrinks } = useContext(recipesContext);

  return (
    <section>
      <Header title="Bebidas" searchButton />
      <CategoryButtonsDrinks setData={ setDrinks } />
      <section className="cards-container">
        { drinks && drinks
          .slice(0, MAX_RECIPES).map(({ strDrinkThumb, strDrink, idDrink }, index) => (
            <RecipeCard
              key={ index }
              image={ strDrinkThumb }
              id={ idDrink }
              index={ index }
              name={ strDrink }
              page="bebidas"
            />
          )) }
      </section>
      <FooterMenu />
    </section>
  );
}
