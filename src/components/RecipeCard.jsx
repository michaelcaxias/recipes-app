import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';

export default function RecipeCard({ image, index, name, id, page }) {
  const history = useHistory();

  return (
    <Card
      style={ { width: '10rem' } }
      data-testid={ `${index}-recipe-card` }
      onClick={ () => { history.push(`/${page}/${id}`); } }
    >
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
  id: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
