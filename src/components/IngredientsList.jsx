import PropTypes from 'prop-types';
import React from 'react';

export default function IngredientsMeasureList({ comidaId }) {
  const arrayKeys = Object.keys(comidaId);
  const ingredientsKeys = arrayKeys.filter((key) => key.includes('strIngredient'));
  const ingredientMeasureKeys = arrayKeys.filter((key) => key.includes('strMeasure'));

  return (
    <ul>
      { ingredientsKeys.map((key, index) => (
        comidaId[key] && (
          <li key={ key } data-testid={ `${index}-ingredient-name-and-measure` }>
            { `${comidaId[key]} - ${comidaId[ingredientMeasureKeys[index]]}` }
          </li>
        )))}
    </ul>
  );
}

IngredientsMeasureList.propTypes = {
  comidaId: PropTypes.string.isRequired,
};
