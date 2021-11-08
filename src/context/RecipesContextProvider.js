import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import recipesContext from './recipesContext';

export default function RecipesContextProvider({ children }) {
  const { pathname } = useLocation();

  const [data, setData] = useState({});
  const [page, setPage] = useState('food');

  const fetchAPI = async (url) => {
    const response = await fetch(url);
    const resolve = await response.json();
    setData(resolve);
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
      fetchAPI(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${query}`);
    }
    if (searchFor === 'name') {
      fetchAPI(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    }
  };

  const context = {
    page,
    data,
    setPage,
    filterByFoods,
    filterByDrinks,
  };

  useEffect(() => {
    if (pathname.includes('/comidas')) {
      setPage('food');
    }
    if (pathname.includes('/bebidas')) {
      setPage('drink');
    }
  }, [pathname]);

  return (
    <recipesContext.Provider value={ context }>
      {children}
    </recipesContext.Provider>
  );
}

RecipesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
