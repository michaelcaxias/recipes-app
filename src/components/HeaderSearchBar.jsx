import React, { useState, useContext } from 'react';
import recipesContext from '../context/recipesContext';

export default function HeaderSearchBar() {
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
    <header>
      <label htmlFor="search-input">
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          data-testid="search-input"
          name="query"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="ingredient-radio">
        Busca por Ingredientes:
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
        Busca por Nome:
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
        Busca por primeira letra:
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="searchFor"
          value="first-letter"
          onChange={ handleChange }
          id="first-letter-radio"
        />
      </label>
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