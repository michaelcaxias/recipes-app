import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton() {
  const [isCopied, setCopied] = useState(false);

  const copyPathname = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
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
