import React, { useState, useEffect } from 'react';
// import requestRecipes from '../helpers/requestRecipes';

const MAX_CATEGORIES = 5;
const MAX_DRINKS = 12;
const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const key = 'drinks';
const baseCategoryUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

export default function CategoryButtonsDrinks() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function requestCategories() {
      const request = await fetch(url);
      const response = await request.json();
      setCategories(response[key]);
    }
    requestCategories();
  }, []);

  async function filterDrinksByCategory({ target: { value } }) {
    // setCategory(value);
    const request = await fetch(`${baseCategoryUrl}${value}`);
    const response = await request.json();
    const filterDrinks = response[key];
    const filteredDrinks = filterDrinks ? filterDrinks.slice(0, MAX_DRINKS) : [];
    console.log(filteredDrinks);
    return filteredDrinks;
  }

  const categoriesButton = categories ? categories.slice(0, MAX_CATEGORIES) : [];

  return (
    <section>
      <button type="button">All</button>
      {categoriesButton.map(({ strCategory }) => (
        <button
          key={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          value={ strCategory }
          onClick={ filterDrinksByCategory }
        >
          {strCategory}

        </button>))}
    </section>
  );
}
