import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

export default function IngredientListProgress({ ingredients }) {
  const arrayKeys = Object.keys(ingredients);
  const ingredientsKeys = arrayKeys.filter((key) => key.includes('strIngredient'));
  const ingredientMeasureKeys = arrayKeys.filter((key) => key.includes('strMeasure'));

  return (
    <ul>
      { ingredientsKeys.map((key, index) => (
        ingredients[key] && (
          <label
            htmlFor={ key }
            key={ key }
            data-testid={ `${index}-ingredient-step` }
          >
            <Checkbox id={ key } />
            { `${ingredients[key]} - ${ingredients[ingredientMeasureKeys[index]]}` }
          </label>
        )))}
    </ul>
  );
}

IngredientListProgress.propTypes = {
  ingredients: PropTypes.objectOf(
    PropTypes.shape(),
  ).isRequired,
};
