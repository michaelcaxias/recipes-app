import PropTypes from 'prop-types';
import React from 'react';

export default function IngredientsMeasureList({ ingredients }) {
  // const [isChecked, setIsChecked] = useState(false);

  const arrayKeys = Object.keys(ingredients);
  const ingredientsKeys = arrayKeys.filter((key) => key.includes('strIngredient'));
  const ingredientMeasureKeys = arrayKeys.filter((key) => key.includes('strMeasure'));

  // const isChecked = handleCheckbox(event);
  return (
    <ul>
      { ingredientsKeys.map((key, index) => (
        ingredients[key] && (
          <li
            htmlFor={ key }
            key={ key }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${ingredients[key]} - ${ingredients[ingredientMeasureKeys[index]]}` }
          </li>
        )))}
    </ul>
  );
}

IngredientsMeasureList.propTypes = {
  ingredients: PropTypes.shape(
    PropTypes.any,
  ).isRequired,
};
