import React, { useEffect, useState } from 'react';
import CardFavorites from '../components/CardFavorites';
import Header from '../components/Header';
import Loading from '../components/Loading';

export default function FavoriteRecipes() {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites(favoritesStorage);
  }, []);

  if (!favorites) {
    return <Loading />;
  }

  return (
    <div>
      <Header title="Receitas Favoritas" searchButton={ false } />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      {favorites
        ? favorites.map((favoritos, i) => (<CardFavorites
            key={ i }
            favorite={ favoritos }
            index={ i }
        />))
        : <p>Não tem favoritos</p>}

    </div>

  );
}
