import React, { useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteButton({ foodId }) {
  const favoriteObj = [{
    id: 'id-da-receita',
    type: 'comida-ou-bebida',
    area: 'area-da-receita-ou-texto-vazio',
    category: 'categoria-da-receita-ou-texto-vazio',
    alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
    name: 'nome-da-receita',
    image: 'imagem-da-receita',
  }];

  const [favorite, setFavorite] = useState(whiteHeartIcon);

  function favoriteRecipes() {
    const storageFavorite = localStorage.getItem(favoriteRecipes);
    if (storageFavorite) {

    } else {
      localStorage.setItem(favoriteRecipes, []);
    }
    setFavorite(blackHeartIcon);
  }

  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ favoriteRecipes }
      >
        <img src={ favorite } alt="Favorite" />
      </button>
    </div>
  );
}
