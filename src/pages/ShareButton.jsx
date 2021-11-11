import React from 'react';
import { useLocation } from 'react-router';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton() {
  const { pathname } = useLocation();
  return (
    <button
      type="button"
      data-testid="share-btn"
      onClick={ () => copy(pathname) }
    >
      <img src={ shareIcon } alt="botão de compartilhar" />

    </button>
  );
}
