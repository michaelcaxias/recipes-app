import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import IngredientsMeasureList from '../components/IngredientsMeasureList';
import MapRecommendation from '../components/MapRecommendation';

export default function FoodId() {
  const { id } = useParams();

  const [comidaId, setComidaId] = useState();
  const [recomendedMeal, setRecomendedMeal] = useState();

  const embedVideo = () => {
    if (comidaId !== undefined) {
      console.log('cheguei aqui');
      const code = comidaId.strYoutube.split('v=');
      return `http://www.youtube.com/embed/${code[1]}`;
    }
  };

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

  useEffect(() => {
    async function requestRecomendedMeal() {
      const recomendedMealURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const request = await fetch(recomendedMealURL);
      const response = await request.json();
      console.log(response);
      setRecomendedMeal(response.meals);
    }
    requestRecomendedMeal();
  }, []);

  if (!comidaId) {
    return <Loading />;
  }

  return (
    <div>
      { console.log(recomendedMeal) }
      <img data-testid="recipe-photo" alt="recipe" src={ comidaId.strMealThumb } />
      <h1 data-testid="recipe-title">{comidaId.strMeal}</h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritos</button>
      <p data-testid="recipe-category">{comidaId.strCategory}</p>
      <h3>Ingredientes</h3>
      <IngredientsMeasureList ingredients={ comidaId } />
      <h3>Modo de Preparo</h3>
      <p data-testid="instructions">{comidaId.strInstructions}</p>
      <iframe
        data-testid="video"
        width="340"
        height="180"
        src={ embedVideo() }
        title="Youtube Video"
        frameBorder="0"
      />
      <MapRecommendation type="comidas" data={ recomendedMeal } />
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}
