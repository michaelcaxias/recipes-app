import PropTypes from 'prop-types';
import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton({ dataTestId = 'share-button' }) {
  const [isCopied, setCopied] = useState(false);

  const copyPathname = () => {
    const link = window.location.href;
    copy(link);
    setCopied(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={ copyPathname }
      >
        <img src={ shareIcon } data-testid={ dataTestId } alt="botão de compartilhar" />

      </button>
      { isCopied && <span>Link copiado!</span> }
    </>
  );
}

ShareButton.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};
