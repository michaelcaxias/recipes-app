import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

const emailInputId = 'email-input';
const passwordInputId = 'password-input';
const loginButtonId = 'login-submit-btn';
const email = 'email@email.com';
const password = '1234567';

describe('Na página de login', () => {
  test('Se os inputs de email e senha e o botão "entrar" são renderizados', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByTestId(emailInputId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const loginButton = screen.getByTestId(loginButtonId);

    expect(emailInput && passwordInput && loginButton).toBeInTheDocument();
  });
  test('Se é possível escrever nos inputs de email e senha', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByTestId(emailInputId);
    const passwordInput = screen.getByTestId(passwordInputId);

    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(passwordInput, '1234567');

    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);
  });
  test('Se o botão está desabilitado quando digita email ou senha inválidos', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByTestId(emailInputId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const loginButton = screen.getByTestId(loginButtonId);

    userEvent.type(emailInput, 'abc@');
    userEvent.type(passwordInput, '123456');

    expect(loginButton).toBeDisabled();
    expect(loginButton).toHaveAttribute('disabled');
  });
  test('Se o botão está habilitado quando digita email ou senha válidos', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByTestId(emailInputId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const loginButton = screen.getByTestId(loginButtonId);

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);

    expect(loginButton).toHaveProperty('disabled', false);
  });
  test('Se salva as chaves "mealsToken" e "cocktailsToken" no localStorage', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByTestId(emailInputId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const loginButton = screen.getByTestId(loginButtonId);

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    loginButton.click();

    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
  });
  test('Se salva o email da pessoa no localStorage', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByTestId(emailInputId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const loginButton = screen.getByTestId(loginButtonId);

    userEvent.type(emailInput, 'teste@email.com');
    userEvent.type(passwordInput, password);
    loginButton.click();

    expect(JSON.parse(localStorage.getItem('user')))
      .toStrictEqual({ email: 'teste@email.com' });
  });
  test('Se a pessoa é redirecionada para "/comidas" ao clicar no botão "entrar"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Login />
      </Router>,
    );
    const emailInput = screen.getByTestId(emailInputId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const loginButton = screen.getByTestId(loginButtonId);

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    loginButton.click();

    expect(history.location.pathname).toBe('/comidas');
  });
});
