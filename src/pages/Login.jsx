import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (Email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);

  const MAX_LENGTH = 6;
  const disabled = password.length > MAX_LENGTH && isEmailValid(email);
  return (
    <form>
      <input
        type="email"
        data-testid="email-input"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !disabled }
      >
        Entrar

      </button>
    </form>
  );
}
// regex validação email: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
