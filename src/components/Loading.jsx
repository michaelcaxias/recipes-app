import React from 'react'
import logo from '../images/Logo.svg';
import '../styles/loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
      <object
        className="logo-loading"
        type="image/svg+xml"
        data={ logo }
      >
      </object>
      <span className="loading-heading">Carregando...</span>
    </div>
  );
}
