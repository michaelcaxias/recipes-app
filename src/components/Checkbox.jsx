import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ id, checkProgress, ingredient, tipo }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
    localStorage
      .setItem('ingredientsInProgress', JSON
        .stringify([...JSON.parse(localStorage.getItem('ingredientsInProgress')), id]));
    checkProgress();
  }

  function chek() {
    const obtProgress = localStorage.getItem('inProgressRecipes');
    const stringProgress = JSON.parse(obtProgress);
    if (tipo === 'meals') {
      const objMeals = stringProgress.meals[ingredient.idMeal];
      objMeals.push(ingredient[id]);
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...stringProgress, meals: {
          ...stringProgress.meals, [ingredient.idMeal]: [...objMeals] } }));
    }
  }

  return (
    <input
      type="checkbox"
      id={ id }
      name={ id }
      checked={ isChecked }
      onChange={ () => chek() }
    />
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checkProgress: PropTypes.func.isRequired,
};
