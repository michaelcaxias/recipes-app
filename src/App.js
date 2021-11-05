import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Login from './pages/Login';
import FoodRecipes from './pages/FoodRecipes';
import Ingredients from './pages/Ingredients';
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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/explorar/comidas/ingredientes" component={ Ingredients } />
        <Route path="/explorar/bebidas/ingredientes" component={ Ingredients } />
        <Route path="/comidas/:id/in-progress" component={ FoodInProgress } />
        <Route path="/bebidas/:id/in-progress" component={ DrinksInProgress } />
        <Route path="/explorar/comidas/area" component={ ExplorerFoodsArea } />
        <Route path="/comidas/:id" component={ FoodId } />
        <Route path="/bebidas/:id" component={ DrinksId } />
        <Route path="/explorar/comidas" component={ ExplorerFoods } />
        <Route path="/explorar/bebidas" component={ ExplorerDrinks } />
        <Route path="/comidas" component={ FoodRecipes } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/explorar" component={ Explorer } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ RecipesDone } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
