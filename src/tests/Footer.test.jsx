import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const dataBtnDrinks = 'drinks-bottom-btn';
const dataBtnExplore = 'explore-bottom-btn';
const dataBtnFood = 'food-bottom-btn';

describe('Testando component FooterMenu.jsx', () => {
  test('se os 3 botões estão na tela, e levam a rota correta', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const btnFood = screen.getByTestId(dataBtnFood);
    expect(btnFood).toBeInTheDocument();
    expect(history.location.pathname).toBe('/comidas');

    const btnDrinks = screen.getByTestId(dataBtnDrinks);
    expect(btnDrinks).toBeInTheDocument();
    btnDrinks.click();
    expect(history.location.pathname).toBe('/bebidas');

    const btnExplore = screen.getByTestId(dataBtnExplore);
    expect(btnExplore).toBeInTheDocument();
    btnExplore.click();
    expect(history.location.pathname).toBe('/explorar');
  });
});
