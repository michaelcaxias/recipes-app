import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import '../styles/ingredientListProgress.css';

export default
function IngredientListProgress({
  ingredients,
  checkProgress, setIngredientsLength, tipo }) {
  const arrayKeys = Object.keys(ingredients);
  const ingredientsKeys = arrayKeys
    .filter((key) => key.includes('strIngredient'))
    .filter((key) => ingredients[key] !== '');
  const ingredientMeasureKeys = arrayKeys.filter((key) => key.includes('strMeasure'));

  useEffect(() => {
    setIngredientsLength(ingredientsKeys.length);
  }, []);

  return (
    <ul className="ingredients-list-progress">
      { ingredientsKeys.map((key, index) => (
        ingredients[key] && (
          <Checkbox
            id={ key }
            checkProgress={ checkProgress }
            ingredientMeasureKeys={ ingredientMeasureKeys }
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
  tipo: PropTypes.string.isRequired,
};
