import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const MAX_CATEGORIES = 5;
const MAX_MEALS = 12;
const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const urlAll = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const key = 'meals';
const baseCategoryUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export default function CategoryButtons({ setData }) {
  const [categories, setCategories] = useState([]);
  const [nameCategory, setNameCategory] = useState('');

  useEffect(() => {
    async function requestCategories() {
      const request = await fetch(url);
      const response = await request.json();
      setCategories(response[key]);
    }
    requestCategories();
  }, []);

  async function getAllRecipes() {
    const request = await fetch(urlAll);
    const response = await request.json();
    const filterMeals = response[key];
    const filteredMeals = filterMeals ? filterMeals.slice(0, MAX_MEALS) : [];
    setData(filteredMeals);
    setNameCategory('');
  }

  async function filterMealsByCategory({ target: { value } }) {
    const request = await fetch(`${baseCategoryUrl}${value}`);
    const response = await request.json();
    const filterMeals = response[key];
    const filteredMeals = filterMeals ? filterMeals.slice(0, MAX_MEALS) : [];
    setData(filteredMeals);
    setNameCategory(value);
  }

  const categoriesButton = categories ? categories.slice(0, MAX_CATEGORIES) : [];

  return (
    <section className="category-btn-filters">
      <button
        type="button"
        value="All"
        onClick={ getAllRecipes }
        data-testid="All-category-filter"
        className={ nameCategory === '' ? 'btn-active' : 'btn-no-active' }
      >
        All
      </button>
      {categoriesButton.map(({ strCategory }) => (
        <button
          key={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          value={ strCategory }
          onClick={ nameCategory !== strCategory ? filterMealsByCategory : getAllRecipes }
          className={ nameCategory !== strCategory ? 'btn-no-active' : 'btn-active' }
        >
          {strCategory}
        </button>))}
    </section>
  );
}

CategoryButtons.propTypes = {
  setData: PropTypes.func.isRequired,
};
