import React, { useState, useEffect, useContext } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import recipesContext from '../context/recipesContext';
import '../styles/foodAndDrinks.css';

const MAX_RECIPES = 12;

export default function ExplorerFoodsArea() {
  const { meals } = useContext(recipesContext);

  const [area, setAreas] = useState([]);

  useEffect(() => {
    const getAreas = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await response.json();
        setAreas((data.meals).map((areaObject) => areaObject.strArea));
      } catch (error) {
        console.error(error);
        setAreas(['Nenhuma área foi encontrada']);
      }
    };
    getAreas();
  }, []);

  return (
    <section>
      <Header title="Explorar Origem" />
      <select data-testid="explore-by-area-dropdown">
        <option value="All">All</option>
        {area.map((areaOption) => (
          <option
            key={ areaOption }
            value={ areaOption }
            data-testid={ `${areaOption}-option` }
          >
            {areaOption}

          </option>
        ))}
      </select>
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
