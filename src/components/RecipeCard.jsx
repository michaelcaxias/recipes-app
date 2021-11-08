import PropTypes from 'prop-types';
import React from 'react';

export default function RecipeCard({ image, index, name }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img src={ image } data-testid={ `${index}-card-img` } alt="" />
      <h1 data-testid={ `${index}-card-name` }>{ name }</h1>
    </div>
  );
}

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
