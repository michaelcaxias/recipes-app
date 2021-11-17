import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ id }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
    localStorage
      .setItem('ingredientsInProgress', JSON
        .stringify([...JSON.parse(localStorage.getItem('doneRecipes')), id]));
  }

  return (
    <input
      type="checkbox"
      id={ id }
      name={ id }
      checked={ isChecked }
      onChange={ () => handleChange() }
    />
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
};
