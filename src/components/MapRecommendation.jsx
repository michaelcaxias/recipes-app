import React from 'react';

export default function MapRecommendation({ type, data = [] }) {
  if (type === 'comidas') {
    return (
      data.map(({ strMeal }, index) => (
        <div key={ index } data-testid={ `${index}-recomendation-card` }>
          <p>{strMeal}</p>
        </div>
      ))
    );
  }
  if (type === 'bebidas') {
    return (
      data.map(({ strDrink }, index) => (
        <div key={ index } data-testid={ `${index}-recomendation-card` }>
          <p>{strDrink}</p>
        </div>
      ))
    );
  }
}
