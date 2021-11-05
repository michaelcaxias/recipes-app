import React from 'react';

export default function HeaderSearchBar() {
  return (
    <header>
      <label htmlFor="search-input">
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          data-testid="search-input"
        />
      </label>
      <label htmlFor="ingredient-radio">
        Busca por Ingredientes:
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient-radio"
        />
      </label>
      <label htmlFor="name-radio">
        Busca por Nome:
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name-radio"
        />
      </label>
      <label htmlFor="first-letter-radio">
        Busca por primeira letra:
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter-radio"
        />
      </label>
      <label htmlFor="search-btn">
        <input
          type="button"
          data-testid="exec-search-btn"
          id="search-btn"
        />
      </label>
    </header>
  );
}
