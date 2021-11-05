import PropTypes from 'prop-types';
import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title }) {
  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick=""
      >
        <img src={ profileIcon } alt="profile" />
      </button>
      <button
        type="button"
        data-testid="search-top-btn"
        onClick=""
      >
        <img src={ searchIcon } alt="search" />
      </button>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
