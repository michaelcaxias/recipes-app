import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import FooterMenu from '../components/FooterMenu';
import FoodRecipes from '../pages/FoodRecipes';
import Login from '../pages/Login';

const dataBtnDrinks = 'btn-drinks';
const dataBtnFood = 'btn-food';
const dataBtnExplore = 'btn-explorer';

const emailInputId = 'email-input';
const passwordInputId = 'password-input';
const loginButtonId = 'login-submit-btn';
const email = 'email@email.com';
const password = '1234567';

describe('Testando component FooterMenu.jsx', () => {
  test('Deve renderizar o Footer na página', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
  test('se os 3 botões estão na tela, e levam a rota correta', () => {
    const { history } = renderWithRouter(<FoodRecipes />);

    // const emailInput = screen.getByTestId(emailInputId);
    // const passwordInput = screen.getByTestId(passwordInputId);
    // const loginButton = screen.getByTestId(loginButtonId);

    // userEvent.type(emailInput, email);
    // userEvent.type(passwordInput, password);
    // expect(loginButton).toHaveProperty('disabled', false);
    // loginButton.click();
    // history.push('/comidas');

    const btnFood = screen.getByTestId(dataBtnFood);
    expect(btnFood).toBeInTheDocument();
    expect(history.location.pathname).toBe('/comidas');

    const btnDrinks = screen.getByTestId(dataBtnDrinks);
    expect(btnDrinks).toBeInTheDocument();
    btnDrinks.click();
    expect(history.location.pathname).toBe('/bebidas');

    const btnExplore = screen.getByTestId(dataBtnExplore);
    btnExplore.click();
    expect(btnExplore).toBeInTheDocument();
    expect(history.location.pathname).toBe('/explorar');

    // const titleDrinks = screen.getByAllText('Bebidas');
    // expect(titleDrinks).toBeInTheDocument();
  });
});
