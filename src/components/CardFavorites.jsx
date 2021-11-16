import PropTypes, { any, shape } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

export default function CardFavorites({ favorite, index, setFavorites }) {
  function disfavor() {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    favoritesStorage.splice(index, 1);
    console.log(favoritesStorage);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesStorage));
    setFavorites(favoritesStorage);
  }

  return (
    <div>
      {favorite.type === 'comida'
        ? (
          <div>
            <Link
              to={ `/comidas/${favorite.id}` }
            >
              <img
                data-testid={ `${index}-horizontal-image` }
                alt={ `Imagem da comida ${favorite.name}` }
                src={ favorite.image }
              />
              <h1 data-testid={ `${index}-horizontal-name` }>{ favorite.name }</h1>

              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { `${favorite.area} - ${favorite.category}` }
              </p>
            </Link>

            <button type="button">
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                alt="compartilhar"
                src={ shareIcon }
              />
            </button>
            <button
              type="button"
              onClick={ disfavor }
            >
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                alt="desfavoritar"
                src={ blackHeartIcon }
              />
            </button>
          </div>)
        : (
          <div>
            <Link
              to={ `/bebidas/${favorite.id}` }
            >
              <img
                data-testid={ `${index}-horizontal-image` }
                alt={ `Imagem da bebida ${favorite.name}` }
                src={ favorite.image }
              />
              <h1 data-testid={ `${index}-horizontal-name` }>{ favorite.name }</h1>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { favorite.alcoholicOrNot }
              </p>
            </Link>
            <button type="button">
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                alt="compartilhar"
                src={ shareIcon }
              />
            </button>
            <button
              type="button"
              onClick={ disfavor }
            >
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                alt="desfavoritar"
                src={ blackHeartIcon }
              />
            </button>
          </div>)}
    </div>
  );
}

CardFavorites.propTypes = {
  favorite: PropTypes.arrayOf(shape(any)).isRequired,
  index: PropTypes.number.isRequired,
  setFavorites: PropTypes.func.isRequired,
};
