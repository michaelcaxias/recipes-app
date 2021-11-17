import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Login from './pages/Login';
import FoodRecipes from './pages/FoodRecipes';
import IngredientsFood from './pages/IngredientsFood';
import IngredientsDrink from './pages/IngredientsDrink';
import Explorer from './pages/Explorer';
import Perfil from './pages/Perfil';
import RecipesDone from './pages/RecipesDone';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Drinks from './pages/Drinks';
import ExplorerFoods from './pages/ExplorerFoods';
import ExplorerDrinks from './pages/ExplorerDrinks';
import ExplorerFoodsArea from './pages/ExplorerFoodsArea';
import DrinksId from './pages/DrinksId';
import FoodId from './pages/FoodId';
import FoodInProgress from './pages/FoodInProgress';
import DrinksInProgress from './pages/DrinksInProgress';
import RecipesContextProvider from './context/RecipesContextProvider';
import NotFound from './pages/NotFound';

const exploreFoodsByIngredients = '/explorar/comidas/ingredientes';
const exploreDrinksByIngredients = '/explorar/bebidas/ingredientes';

function App() {
  return (
    <RecipesContextProvider>
      <Switch>
        <Route exact path={ exploreFoodsByIngredients } component={ IngredientsFood } />
        <Route exact path={ exploreDrinksByIngredients } component={ IngredientsDrink } />
        <Route exact path="/comidas/:id/in-progress" component={ FoodInProgress } />
        <Route exact path="/bebidas/:id/in-progress" component={ DrinksInProgress } />
        <Route exact path="/explorar/comidas/area" component={ ExplorerFoodsArea } />
        <Route exact path="/comidas/:id" component={ FoodId } />
        <Route exact path="/bebidas/:id" component={ DrinksId } />
        <Route exact path="/explorar/comidas" component={ ExplorerFoods } />
        <Route exact path="/explorar/bebidas" component={ ExplorerDrinks } />
        <Route exact path="/comidas" component={ FoodRecipes } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/explorar" component={ Explorer } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/receitas-feitas" component={ RecipesDone } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </RecipesContextProvider>
  );
}

export default App;
