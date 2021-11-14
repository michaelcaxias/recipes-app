import React from 'react';

export default function MapRecommendation({ type, data = [] }) {
  const MAX_RECIPES = 6;
  /* -> Por algum motivo a renderização buga usando o slice
  const recipes = data.slice(0, MAX_RECIPES);
  console.log(recipes); */

  if (type === 'comidas') {
    return (
      data.map(({ strMeal }, index) => {
        if (index < MAX_RECIPES) {
          return (
            <div
              key={ index }
              className="recommendation-card"
              data-testid={ `${index}-recomendation-card` }
            >
              <p data-testid={ `${index}-recomendation-title` }>{strMeal}</p>
            </div>
          );
        }
        return '';
      })
    );
  }
  if (type === 'bebidas') {
    return (
      data.map(({ strDrink }, index) => {
        if (index < MAX_RECIPES) {
          return (
            <div
              key={ index }
              className="recommendation-card"
              data-testid={ `${index}-recomendation-card` }
            >
              <p data-testid={ `${index}-recomendation-title` }>{strDrink}</p>
            </div>
          );
        }
        return '';
      })
    );
  }
}
