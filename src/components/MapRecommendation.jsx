import React from 'react';

export default function MapRecommendation({ type, data = [] }) {
  const MAX_RECIPES = 6;
  /* -> Por algum motivo a renderização buga usando o slice
  const recipes = data.slice(0, MAX_RECIPES);
  console.log(recipes); */

  if (type === 'comidas') {
    return (
      data.map(({ strMeal, strMealThumb }, index) => {
        if (index < MAX_RECIPES) {
          return (
            <div
              key={ index }
              className="recommendation-card"
              data-testid={ `${index}-recomendation-card` }
            >
              <div className="card-thumb">
                <img
                  alt="recipe-thumb"
                  src={ strMealThumb }
                  className="thumb-recipe"
                />
              </div>
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
      data.map(({ strDrink, strDrinkThumb }, index) => {
        if (index < MAX_RECIPES) {
          return (
            <div
              key={ index }
              className="recommendation-card"
              data-testid={ `${index}-recomendation-card` }
            >
              <div className="card-thumb">
                <img
                  alt="recipe-thumb"
                  src={ strDrinkThumb }
                  className="thumb-recipe"
                />
              </div>
              <p data-testid={ `${index}-recomendation-title` }>{strDrink}</p>
            </div>
          );
        }
        return '';
      })
    );
  }
}
