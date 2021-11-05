import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import recipesContext from './recipesContext';

export default function RecipesContextProvider({ children }) {
  const { pathname } = useLocation();

  const [page, setPage] = useState('food');

  const context = {
    page,
    setPage,
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
