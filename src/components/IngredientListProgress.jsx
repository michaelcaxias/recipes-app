import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientListProgress({ ingredients }) {
  // const [isChecked, setIsChecked] = useState(false);

  const arrayKeys = Object.keys(ingredients);
  const ingredientsKeys = arrayKeys.filter((key) => key.includes('strIngredient'));
  const ingredientMeasureKeys = arrayKeys.filter((key) => key.includes('strMeasure'));

  // let isChecked = false;

  /* const [checkedState, setCheckedState] = useState(
    new Array(ingredientsKeys.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )};

    setCheckedState(updatedCheckedState);
 */
  // const isChecked = handleCheckbox(event);
  return (
    <ul>
      { ingredientsKeys.map((key, index) => (
        ingredients[key] && (
          <label
            htmlFor={ key }
            key={ key }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              id={ key }
              name={ key }
              // checked={ checkedState[index] }
              // onChange={ () => handleOnChange(index) }
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
};
