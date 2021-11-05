import React from 'react';

export default function Header() {
  return (
    <header>
      <h1 data-testid="page-title">Titulo</h1>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={}
      >Perfil</button>
        <button
        type="button"
        data-testid="search-top-btn"
        onClick={}
      >Pesquisa</button>
    </header>
  );
}
