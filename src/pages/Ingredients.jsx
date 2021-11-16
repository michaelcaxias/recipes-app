import React, { useState, useEffect } from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import { Card } from 'react-bootstrap';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState();
  const [ingredientsImage, setIngredientsImage] = useState([]);

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
      <Card>
        { filteredIngredients.map((ingredient, index) => (
          <div key={ ingredient.idIngredient }>
            <CardImg src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-small.png` } alt={ ingredient.strIngredient } />
            <p>
              {ingredient.strIngredient}
            </p>
          </div>
        ))}
      </Card>
      <FooterMenu />
    </section>
  );
}
