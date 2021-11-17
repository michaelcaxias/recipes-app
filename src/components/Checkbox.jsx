import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ id }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <input
      type="checkbox"
      id={ id }
      name={ id }
      checked={ isChecked }
      onChange={ () => setIsChecked(!isChecked) }
    />
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
};
