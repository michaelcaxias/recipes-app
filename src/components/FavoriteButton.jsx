import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

// essa função diminui a complexidade do FavoriteButton
function checkFavorites(favorite, idItem, setFavoriteIcon) {
  const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const searchItem = favoritesStorage.some((item) => item.id === favorite[idItem]);
  if (searchItem) setFavoriteIcon(blackHeartIcon);
}

export default function FavoriteButton({ favorite, type }) {
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  const idItem = (type === 'comida') ? 'idMeal' : 'idDrink';
  const favoriteObj = {
    type,
    area: favorite.strArea || '',
    category: favorite.strCategory || '',
    id: favorite.idMeal || favorite.idDrink,
    name: favorite.strMeal || favorite.strDrink,
    alcoholicOrNot: favorite.strAlcoholic || '',
    image: favorite.strMealThumb || favorite.strDrinkThumb,
  };

  const [favoriteIcon, setFavoriteIcon] = useState(whiteHeartIcon);

  function favoriteRecipe() {
    let indexItem;
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const searchItem = favoritesStorage.some((item, index) => {
      if (item.id === favorite[idItem]) {
        indexItem = index;
        return true;
      }
      return false;
    });

    if (!searchItem) {
      // caso o item não exista no localStorage - adiciona
      favoritesStorage.push(favoriteObj);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesStorage));
      setFavoriteIcon(blackHeartIcon);
    } else {
      // caso o item exista no localStorage - remove
      favoritesStorage.splice(indexItem, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesStorage));
      setFavoriteIcon(whiteHeartIcon);
    }
  }

  useEffect(() => {
    checkFavorites(favorite, idItem, setFavoriteIcon);
  }, [favorite, idItem]);

  return (
    <button
      type="button"
      onClick={ favoriteRecipe }
    >
      <img data-testid="favorite-btn" src={ favoriteIcon } alt="Favorite" />
    </button>
  );
}

FavoriteButton.propTypes = {
  favorite: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};
