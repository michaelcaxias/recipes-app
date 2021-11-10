import React from 'react';
import { screen } from '@testing-library/react';
import Header from '../components/Header';
import renderWithRouter from './renderWithRouter';
import FoodRecipes from '../pages/FoodRecipes';

const dataBtnSearchIcon = 'search-top-btn';
const dataBtnProfile = 'profile-top-btn';
// const dataTitulo = 'page-title;';

describe('Testando Header.js', () => {
  test('se elementos do Header estão na tela', () => {
    renderWithRouter(<Header />);
    const btnSearch = screen.getByTestId(dataBtnSearchIcon);
    const btnProfile = screen.getByTestId(dataBtnProfile);
    expect(btnSearch).toBeInTheDocument();
    expect(btnProfile).toBeInTheDocument();
  });

  test('se o titulo muda de acordo com a rota', () => {
    renderWithRouter(<FoodRecipes />);
    const tituloComidas = screen.getByRole('heading', {
      level: 1,
      name: /Comidas/i,
    });
    expect(tituloComidas).toBeInTheDocument();
  });
});
