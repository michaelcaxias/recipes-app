import React, { useEffect, useState } from 'react';
import CardFavorites from '../components/CardFavorites';
import Header from '../components/Header';

export default function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites(favoritesStorage);
  }, []);

  function searchFood() {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favoritesFood = favoritesStorage
      .filter((favorite) => favorite.type === 'comida');
    setFavorites(favoritesFood);
  }
  function searchDrink() {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favoritesDrink = favoritesStorage
      .filter((favorite) => favorite.type === 'bebida');
    setFavorites(favoritesDrink);
  }
  function searchAll() {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites(favoritesStorage);
  }

  return (
    <div>
      <Header title="Receitas Favoritas" searchButton={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ searchAll }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ searchFood }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ searchDrink }
      >
        Drinks
      </button>
      {favorites
        ? favorites.map((favoritos, i) => (
          <CardFavorites
            key={ i }
            favorite={ favoritos }
            index={ i }
            setFavorites={ setFavorites }
          />))
        : <p>Não tem favoritos</p>}

    </div>

  );
}
