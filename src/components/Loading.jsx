import React from 'react';
import logo from '../images/Logo.svg';
import '../styles/loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
      <img className="logo-loading" src={ logo } alt="logo" />
      <span className="loading-heading">Carregando...</span>
    </div>
  );
}
