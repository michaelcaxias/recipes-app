import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function RecipeCard({ image, index, name }) {
  return (
    <Card style={ { width: '10rem' } } data-testid={ `${index}-recipe-card` }>
      <Card.Img data-testid={ `${index}-card-img` } variant="top" src={ image } />
      <Card.Body>
        <Card.Title data-testid={ `${index}-card-name` }>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
