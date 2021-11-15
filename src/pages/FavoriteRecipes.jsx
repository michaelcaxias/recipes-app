import React from 'react';
import Header from '../components/Header';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header title="Receitas Favoritas" searchButton={ false } />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      <button type="button" data-testid={ `${index}-horizontal-share-btn` }>
        Compartilhar
      </button>
      <img data-testid={ `${index}-horizontal-image` } alt="" src="" />
      <p data-testid={ `${index}-horizontal-top-text` }>Categoria</p>
      <h1 data-testid={ `${index}-horizontal-name` }>Nome</h1>
      <p data-testid={ `${index}-horizontal-done-date` }>Data</p>
      <p data-testid={ `${index}-${tagName}-horizontal-tag` }>Tags</p>
    </div>

  );
}
