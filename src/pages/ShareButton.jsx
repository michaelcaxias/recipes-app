import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton() {
  const [isCopied, setCopied] = useState(false);

  const copyPathname = () => {
    copy(window.location.href);
    setCopied(true);
  };

  return (
    <>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyPathname }
      >
        <img src={ shareIcon } alt="botão de compartilhar" />

      </button>
      { isCopied && <span>Link copiado!</span> }
    </>
  );
}
