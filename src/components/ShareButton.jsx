import PropTypes from 'prop-types';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import shareIcon from '../images/shareIcon.svg';

import 'react-toastify/dist/ReactToastify.min.css';

const copy = require('clipboard-copy');

export default function ShareButton({ dataTestId = 'share-btn' }) {
  const copyPathname = () => {
    const link = window.location.href;
    copy(link);
    toast.info('Link copiado!');
  };

  return (
    <>
      <button
        type="button"
        onClick={ copyPathname }
      >
        <img src={ shareIcon } data-testid={ dataTestId } alt="botão de compartilhar" />

      </button>
      <ToastContainer />
    </>
  );
}

ShareButton.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};
