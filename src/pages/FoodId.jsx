import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../components/Loading';

export default function FoodId() {
  const { id } = useParams();
  const index = 1; // só pra tirar o erro

  const [comidaId, setComidaId] = useState();

  useEffect(() => {
    async function requestID() {
      const UrlID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const resquestID = await fetch(UrlID);
      const response = await resquestID.json();
      console.log(response.meals);
      setComidaId(response.meals[0]);
    }
    requestID();
  }, [id]);

  /* function quantityIngredients() {
    const TWENTY = 20;
    let counter = 0;
    for (let i = 1; i <= TWENTY; i += 1) {
      const ingredientAtual = `strIngredient${i}`;
      if (comidaId[ingredientAtual]) counter += 1;
    }
    comidaId.strIngredient
    return counter;
  } */

  if (!comidaId) {
    return <Loading />;
  }

  // const object = {...comidaId}
  const arrayKeys = Object.keys(comidaId);
  const ingredientsKeys = arrayKeys.filter((key) => key.includes(''));

  return (
    <div>
      { console.log(arrayKeys) }
      <img data-testid="recipe-photo" alt="recipe-photo2" />
      <h1 data-testid="recipe-title">{comidaId.strMeal}</h1>
      <button type="button" data-testid="favorite-btn">Favoritos</button>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <p data-testid="recipe-category">{comidaId.strCategory}</p>
      <h3>Ingredientes</h3>
      {/* {comidaId.filter((Object.keys) => )} */}
      // {quantityIngredients()}
      <p data-testid={ `${index}-ingredient-name-and-measure` }>ingrediente</p>
      <h3>Modo de Preparo</h3>
      <p data-testid="instructions">{comidaId.strInstructions}</p>
      <p data-testid="video">Vídeo</p>
      <div data-testid={ `${index}-recomendation-card` }>
        Card_de_receitas_recomentadas
      </div>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}
