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
  const [filteredMealsArea, setFilteredMealsArea] = useState([]);

  const filterByArea = async (areaToFilter) => {
    if (areaToFilter === 'All') {
      setFilteredMealsArea(meals);
    } else {
      const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaToFilter}`);
      const response = await request.json();
      setFilteredMealsArea(response.meals);
    }
  };

  useEffect(() => {
    const getAreas = async () => {
      try {
        const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const response = await request.json();
        const mapAreas = (response.meals).map((areaObject) => areaObject.strArea);
        setAreas(['All'].concat(mapAreas));
        setFilteredMealsArea(meals);
      } catch (error) {
        console.error(error);
        setAreas(['Nenhuma área foi encontrada']);
        setFilteredMealsArea(meals);
      }
    };
    getAreas();
  }, [meals]);

  return (
    <section>
      <Header title="Explorar Origem" />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ ({ target: { value } }) => filterByArea(value) }
      >
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
        { filteredMealsArea && filteredMealsArea
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
