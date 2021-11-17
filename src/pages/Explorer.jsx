import React from 'react';
import { useHistory } from 'react-router';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Explorer() {
  const history = useHistory();
  return (
    <section>
      <Header title="Explorar" searchButton={ false } />
      <div>
        <button
          type="button"
          data-testid="explore-food"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </button>
      </div>
      <div>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Bebidas
        </button>
      </div>
      <FooterMenu />
    </section>
  );
}
