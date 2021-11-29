import React, { useState } from 'react';
import PropTypes, { any } from 'prop-types';
import '../styles/ingredientListProgress.css';

export default function Checkbox(
  { id, checkProgress, ingredient, tipo, ingredientMeasureKeys, index },
) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
    localStorage
      .setItem('ingredientsInProgress', JSON
        .stringify([...JSON.parse(localStorage.getItem('ingredientsInProgress')), id]));
    checkProgress();
    const obtProgress = localStorage.getItem('inProgressRecipes');
    const stringProgress = JSON.parse(obtProgress);
    if (tipo === 'meals') {
      const objMeals = stringProgress.meals[ingredient.idMeal];
      objMeals.push(ingredient[id]);
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...stringProgress,
        meals: {
          ...stringProgress.meals, [ingredient.idMeal]: [...objMeals] } }));
    }
    if (tipo === 'cocktails') {
      const objDrink = stringProgress.cocktails[ingredient.idDrink];
      objDrink.push(ingredient[id]);
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...stringProgress,
        cocktails: {
          ...stringProgress.cocktails, [ingredient.idDrink]: [...objDrink] } }));
    }
  }

  return (
    <label
      htmlFor={ id }
      key={ id }
      className="checkbox-container"
      data-testid={ `${index}-ingredient-step` }
    >
      <input
        type="checkbox"
        id={ id }
        name={ id }
        checked={ isChecked }
        onChange={ () => handleChange() }
      />
      <p
        className={ isChecked && 'checked-list' }
      >
        { `${ingredient[id]} - ${ingredient[ingredientMeasureKeys[index]]}` }

      </p>
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checkProgress: PropTypes.func.isRequired,
  ingredient: PropTypes.shape(Object(any)).isRequired,
  tipo: PropTypes.string.isRequired,
  ingredientMeasureKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};
