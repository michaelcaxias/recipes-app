import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, searchButton = true }) {
  const history = useHistory();
  const searchButtonElement = (
    <button
      type="button"
      data-testid="search-top-btn"
      onClick=""
    >
      <img src={ searchIcon } alt="search" />
    </button>
  );
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/perfil') }
      >
        <img src={ profileIcon } alt="profile" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      { searchButton && searchButtonElement }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchButton: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
