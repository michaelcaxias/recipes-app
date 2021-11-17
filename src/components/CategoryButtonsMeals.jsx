import React, { useState, useEffect } from 'react';
// import requestRecipes from '../helpers/requestRecipes';

const MAX_CATEGORIES = 5;
const MAX_MEALS = 12;
const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const key = 'meals';
const baseCategoryUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export default function CategoryButtons() {
  const [categories, setCategories] = useState([]);
  // const [category, setCategory] = useState('');

  useEffect(() => {
    async function requestCategories() {
      const request = await fetch(url);
      const response = await request.json();
      setCategories(response[key]);
    }
    requestCategories();
  }, []);

  async function filterMealsByCategory({ target: { value } }) {
    // setCategory(value);
    const request = await fetch(`${baseCategoryUrl}${value}`);
    const response = await request.json();
    const filterMeals = response[key];
    const filteredMeals = filterMeals ? filterMeals.slice(0, MAX_MEALS) : [];
    console.log(filteredMeals);
    return filteredMeals;
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
          onClick={ filterMealsByCategory }
        >
          {strCategory}

        </button>))}
    </section>
  );
}
