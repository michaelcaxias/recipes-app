import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

export default
function IngredientListProgress({ ingredients, checkProgress, setIngredientsLength, tipo }) {
  const arrayKeys = Object.keys(ingredients);
  const ingredientsKeys = arrayKeys
    .filter((key) => key.includes('strIngredient'))
    .filter((key) => ingredients[key] !== '');
  const ingredientMeasureKeys = arrayKeys.filter((key) => key.includes('strMeasure'));

  useEffect(() => {
    setIngredientsLength(ingredientsKeys.length);
  }, []);

  return (
    <ul>
      {console.log(ingredientsKeys.length)}
      { ingredientsKeys.map((key, index) => (
        ingredients[key] && (
          <label
            htmlFor={ key }
            key={ key }
            data-testid={ `${index}-ingredient-step` }
          >
            <Checkbox
              id={ key }
              checkProgress={ checkProgress }
              ingredient={ ingredients }
              tipo={ tipo }
              // setIsFinished={ setIsFinished }
            />
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
  checkProgress: PropTypes.func.isRequired,
  setIngredientsLength: PropTypes.func.isRequired,
};
