import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import recipesContext from './recipesContext';

const urlMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export default function RecipesContextProvider({ children }) {
  const { pathname } = useLocation();
  const history = useHistory();

  const [data, setData] = useState([]);
  const [key, setKey] = useState('meals');
  const [URL, setURL] = useState('');
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [page, setPage] = useState('food');
  const [mealIngredients, setMealIngredients] = useState();

  const fetchAPI = async (url) => {
    const response = await fetch(url);
    const resolve = await response.json();
    if (page === 'food') {
      setMeals(resolve.meals);
      if (!resolve.meals) {
        global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      } else if (resolve.meals.length === 1) {
        history.push(`/comidas/${resolve.meals[0].idMeal}`);
      }
    }
    if (page === 'drink') {
      setDrinks(resolve.drinks);
      if (!resolve.drinks) {
        global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      } else if (resolve.drinks.length === 1) {
        history.push(`/bebidas/${resolve.drinks[0].idDrink}`);
      }
    }
  };

  const filterByFoods = (state) => {
    const { query, searchFor } = state;
    if (searchFor === 'first-letter') {
      if (query.length !== 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      fetchAPI(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`);
    }
    if (searchFor === 'ingredient') {
      fetchAPI(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
    }
    if (searchFor === 'name') {
      fetchAPI(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    }
  };

  const filterByDrinks = (state) => {
    const { query, searchFor } = state;
    if (searchFor === 'first-letter') {
      if (query.length !== 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      fetchAPI(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`);
    }
    if (searchFor === 'ingredient') {
      fetchAPI(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`);
    }
    if (searchFor === 'name') {
      fetchAPI(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    }
  };

  function getIngredients(ingredients) {
    setMealIngredients(ingredients);
  }

  const context = {
    page,
    data,
    meals,
    drinks,
    URL,
    setMeals,
    setDrinks,
    setData,
    setPage,
    filterByFoods,
    filterByDrinks,
    mealIngredients,
    getIngredients,
  };

  useEffect(() => {
    if (pathname.includes('/comidas')) {
      setKey('meals');
      setURL(urlMeals);
      setPage('food');
    }
    if (pathname.includes('/bebidas')) {
      setKey('drinks');
      setURL(urlDrinks);
      setPage('drink');
    }
  }, [pathname]);

  useEffect(() => {
    async function requestCategories() {
      const request = await fetch(URL);
      const response = await request.json();
      return page === 'food' ? setMeals(response[key]) : setDrinks(response[key]);
    }
    requestCategories();
  }, [key, URL, page]);

  return (
    <recipesContext.Provider value={ context }>
      {children}
    </recipesContext.Provider>
  );
}

RecipesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
