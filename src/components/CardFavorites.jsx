import PropTypes, { any, shape } from 'prop-types';
import React from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

export default function CardFavorites({ favorite, index }) {
  return (
    <div>
      {favorite.type === 'comida'
        ? (
          <div>
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
            <button type="button">
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                alt="compartilhar"
                src={ shareIcon }
              />
            </button>
            <button type="button">
              <img
                data-testid={ `${index}-horizontal-favorite-btn` }
                alt="desfavoritar"
                src={ blackHeartIcon }
              />
            </button>
          </div>)
        : (
          <div>
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
            <button type="button">
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                alt="compartilhar"
                src={ shareIcon }
              />
            </button>
            <button type="button">
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
};
