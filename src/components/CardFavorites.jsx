import PropTypes, { any, shape } from 'prop-types';
import React from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import ShareButton from './ShareButton';

export default function CardFavorites({ favorite, index }) {
  return (
    <div>
      <img data-testid={ `${index}-horizontal-image` } alt="" src="" />
      <h1 data-testid={ `${index}-horizontal-name` }>{ favorite.name }</h1>
      <p data-testid={ `${index}-horizontal-top-text` }>{ favorite.category }</p>
      <p>{ favorite.area }</p>
      <ShareButton />
      <button type="button">
        <img alt="desfavoritar" src={ blackHeartIcon } />
      </button>
    </div>
  );
}

CardFavorites.propTypes = {
  favorite: PropTypes.arrayOf(shape(any)).isRequired,
  index: PropTypes.number.isRequired,
};
