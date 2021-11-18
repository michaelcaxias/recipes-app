import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import recipesContext from '../context/recipesContext';
import '../styles/headerSearchBar.css';

export default function HeaderSearchBar({ isVisible }) {
  const initialSearch = {
    query: '',
    searchFor: '',
  };
  const [search, setSearch] = useState(initialSearch);

  const { filterByFoods, filterByDrinks, page } = useContext(recipesContext);

  const handleChange = ({ target: { value, name } }) => {
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const click = () => {
    if (page === 'food') filterByFoods(search);
    if (page === 'drink') filterByDrinks(search);
  };

  return (
    <header className="header-search-bar">
      <input
        type="search"
        id="search-input"
        className="search-input"
        placeholder="Buscar Receita"
        data-testid={ isVisible ? 'search-input' : '' }
        name="query"
        onChange={ handleChange }
      />
      <section className="checkboxs-header">
        <label htmlFor="ingredient-radio">
          Ingrediente
          <input
            type="radio"
            name="searchFor"
            data-testid="ingredient-search-radio"
            value="ingredient"
            onChange={ handleChange }
            id="ingredient-radio"
          />
        </label>
        <label htmlFor="name-radio">
          Nome
          <input
            type="radio"
            data-testid="name-search-radio"
            name="searchFor"
            value="name"
            onChange={ handleChange }
            id="name-radio"
          />
        </label>
        <label htmlFor="first-letter-radio">
          Primeira Letra
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="searchFor"
            value="first-letter"
            onChange={ handleChange }
            id="first-letter-radio"
          />
        </label>
      </section>
      <button
        type="button"
        data-testid="exec-search-btn"
        id="search-btn"
        onClick={ click }
      >
        Buscar
      </button>
    </header>
  );
}

HeaderSearchBar.propTypes = {
  isVisible: PropTypes.string.isRequired,
};
