import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import '../styles/foodAndDrinks.css';
import recipesContext from '../context/recipesContext';

export default function Ingredients() {
  const history = useHistory();
  const [ingredients, setIngredients] = useState();

  const { filterByFoods } = useContext(recipesContext);

  const TWELVE_INGREDIENTS = 12;

  useEffect(() => {
    async function requestIngredients() {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const response = await request.json();
      setIngredients(response.meals);
    }
    requestIngredients();
  }, []);

  const handleClick = async (ingredient) => {
    await filterByFoods({ searchFor: 'ingredient', query: ingredient });
    history.push('/comidas');
  };

  const filteredIngredients = ingredients ? ingredients.slice(0, TWELVE_INGREDIENTS) : [];

  return (
    <section>
      <Header title="Explorar Ingredientes" searchButton={ false } />
      <section className="cards-container">
        { filteredIngredients.map((ingredient, index) => (
          <Card
            key={ index }
            onClick={ () => handleClick(ingredient.strIngredient) }
            data-testid={ `${index}-ingredient-card` }
            style={ { width: '10rem' } }
          >
            <Card.Body>
              <Card.Img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                alt={ ingredient.strIngredient }
              />
              <Card.Title data-testid={ `${index}-card-name` }>
                {ingredient.strIngredient}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </section>
      <FooterMenu />
    </section>
  );
}
