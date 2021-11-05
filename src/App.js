import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Login from './pages/Login';
import FoodRecipes from './pages/FoodRecipes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/explorar/comidas/ingredientes" component={} /> */}
        {/* <Route path="/explorar/bebidas/ingredientes" component={} /> */}
        {/* <Route path="/comidas/:id/in-progress" component={} /> */}
        {/* <Route path="/bebidas/:id/in-progress" component={} /> */}
        {/* <Route path="/explorar/comidas/area" component={} /> */}
        {/* <Route path="/comidas/:id" component={} /> */}
        {/* <Route path="/bebidas/:id" component={} /> */}
        {/* <Route path="/explorar/comidas" component={} /> */}
        {/* <Route path="/explorar/bebidas" component={} /> */}
        <Route path="/comidas" component={ FoodRecipes } />
        {/* <Route path="/bebidas" component={} /> */}
        {/* <Route path="/explorar" component={} /> */}
        {/* <Route path="/perfil" component={} /> */}
        {/* <Route path="/receitas-feitas" component={} /> */}
        {/* <Route path="/receitas-favoritas" component={} /> */}
        <Route path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;