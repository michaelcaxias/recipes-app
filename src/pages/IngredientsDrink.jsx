import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import '../styles/foodAndDrinks.css';
import recipesContext from '../context/recipesContext';

export default function IngredientsDrink() {
  const [ingredients, setIngredients] = useState();
  const history = useHistory();
  const { filterByFoods } = useContext(recipesContext);

  const TWELVE_INGREDIENTS = 12;

  useEffect(() => {
    async function requestIngredients() {
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const response = await request.json();
      setIngredients(response.drinks);
    }
    requestIngredients();
  }, []);

  const handleClick = async (ingredient) => {
    await filterByFoods({ searchFor: 'name', query: ingredient });
    console.log(ingredient);
    history.push('/bebidas');
  };

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
            onClick={ () => handleClick(ingredient.strIngredient1) }
          >
            <Card.Body key={ ingredient.strIngredient1 }>
              <Card.Img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                alt={ ingredient.strIngredient1 }
              />
              <Card.Title data-testid={ `${index}-card-name` }>
                {ingredient.strIngredient1}
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
