import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import '../styles/ingredientListProgress.css';

export default
function IngredientListProgress({
  ingredients,
  checkProgress, ingredientsLength, ingredientsKeys, tipo }) {

  return (
    <ul className="ingredients-list-progress">
      { ingredientsKeys.map((key, index) => (
        ingredients[key] && (
          <Checkbox
            id={ key }
            checkProgress={ checkProgress }
            ingredientMeasureKeys={ ingredientsLength }
            index={ index }
            ingredient={ ingredients }
            tipo={ tipo }
          />
        )))}
    </ul>
  );
}

IngredientListProgress.propTypes = {
  ingredients: PropTypes.objectOf(
    PropTypes.shape(),
  ).isRequired,
  checkProgress: PropTypes.func.isRequired,
  setIngredientsLength: PropTypes.func.isRequired,
  ingredientsKeys: PropTypes.arrayOf([]).isRequired,
  tipo: PropTypes.string.isRequired,
};
