import PropTypes, { any, shape } from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import ShareButton from './ShareButton';

export default function CardFavorites({ favorite, index, setFavorites }) {
  const history = useHistory();
  function disfavor() {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    favoritesStorage.splice(index, 1);
    console.log(favoritesStorage);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesStorage));
    setFavorites(favoritesStorage);
  }

  const foodCard = (
    <Card
      style={ { width: '10rem' } }
    >
      <Card.Img
        data-testid={ `${index}-horizontal-image` }
        alt={ `Imagem da comida ${favorite.name}` }
        src={ favorite.image }
        onClick={ () => history.push(`/comidas/${favorite.id}`) }
      />
      <Card.Body>
        <Card.Title
          data-testid={ `${index}-horizontal-name` }
          onClick={ () => history.push(`/comidas/${favorite.id}`) }
        >
          { favorite.name }
        </Card.Title>

        <Card.Text
          data-testid={ `${index}-horizontal-top-text` }
        >

          { `${favorite.area} - ${favorite.category}` }
        </Card.Text>
      </Card.Body>
      <ShareButton dataTestId={ `${index}-horizontal-share-btn` } />

      <button
        type="button"
        onClick={ disfavor }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          alt="desfavoritar"
          src={ blackHeartIcon }
        />
      </button>
    </Card>
  );

  const drinkCard = (
    <Card style={ { width: '10rem' } }>
      <Card.Img
        data-testid={ `${index}-horizontal-image` }
        alt={ `Imagem da bebida ${favorite.name}` }
        src={ favorite.image }
        onClick={ () => history.push(`/bebidas/${favorite.id}`) }
      />
      <Card.Body>
        <Card.Title
          data-testid={ `${index}-horizontal-name` }
          onClick={ () => history.push(`/bebidas/${favorite.id}`) }
        >
          { favorite.name }
        </Card.Title>
        <Card.Text
          data-testid={ `${index}-horizontal-top-text` }
        >
          { favorite.alcoholicOrNot }
        </Card.Text>
      </Card.Body>

      <ShareButton dataTestId={ `${index}-horizontal-share-btn` } />

      <button
        type="button"
        onClick={ disfavor }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          alt="desfavoritar"
          src={ blackHeartIcon }
        />
      </button>
    </Card>
  );

  return (
    <div>
      {favorite.type === 'comida' ? foodCard : drinkCard}
    </div>
  );
}

CardFavorites.propTypes = {
  favorite: PropTypes.arrayOf(shape(any)).isRequired,
  index: PropTypes.number.isRequired,
  setFavorites: PropTypes.func.isRequired,
};
