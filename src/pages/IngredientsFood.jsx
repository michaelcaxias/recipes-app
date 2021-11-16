import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import '../styles/foodAndDrinks.css';

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

  return (
    <section>
      <Header title="Explorar Ingredientes" searchButton={ false } />
      <section className="cards-container">
        { filteredIngredients.map((ingredient, index) => (
          <Card
            key={ index }
            data-testid={ `${index}-ingredient-card` }
            style={ { width: '10rem' } }
          >
            <Card.Body key={ ingredient.idIngredient }>
              <Card.Img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png` }
                alt={ ingredient.strIngredient }
              />
              <Card.Title data-testid={ `${index}-card-name` }>
                {ingredient.strIngredient}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </section>
      <div style={ { height: '60px' } }>
        <p />
      </div>
      <FooterMenu />
    </section>
  );
}
