import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState();

  const TWELVE_INGREDIENTS = 12;

  useEffect(() => {
    async function requestIngredients() {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const response = await request.json();
      setIngredients(response.meals);
    }
    requestIngredients();
  }, []);

  const filteredIngredients = ingredients ? ingredients.slice(0, TWELVE_INGREDIENTS) : [];

  // const filteredImages = ingredientsImage ? ingredientsImage
  //   .slice(0, TWELVE_INGREDIENTS) : [];

  return (
    <section>
      <Header title="Explorar Ingredientes" searchButton={ false } />
      <Card
        style={ { width: '10rem' } }
      >
        { filteredIngredients.map((ingredient) => (
          <Card.Body key={ ingredient.idIngredient }>
            <Card.Img src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png` } alt={ ingredient.strIngredient } />
            <Card.Title>
              {ingredient.strIngredient}
            </Card.Title>
          </div>
        ))}
      </Card>
      <FooterMenu />
    </section>
  );
}
