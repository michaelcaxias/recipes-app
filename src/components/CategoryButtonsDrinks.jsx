import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const MAX_CATEGORIES = 5;
const MAX_DRINKS = 12;
const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const urlAll = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const key = 'drinks';
const baseCategoryUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

export default function CategoryButtonsDrinks({ setData }) {
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
    const filterDrinks = response[key];
    const filteredDrinks = filterDrinks ? filterDrinks.slice(0, MAX_DRINKS) : [];
    setData(filteredDrinks);
    setNameCategory('');
  }

  async function filterDrinksByCategory({ target: { value } }) {
    const request = await fetch(`${baseCategoryUrl}${value}`);
    const response = await request.json();
    const filterDrinks = response[key];
    const filteredDrinks = filterDrinks ? filterDrinks.slice(0, MAX_DRINKS) : [];
    setData(filteredDrinks);
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
          onClick={
            nameCategory !== strCategory ? filterDrinksByCategory : getAllRecipes
          }
          className={ nameCategory !== strCategory ? 'btn-no-active' : 'btn-active' }
        >
          {strCategory}
        </button>))}
    </section>
  );
}

CategoryButtonsDrinks.propTypes = {
  setData: PropTypes.func.isRequired,
};
