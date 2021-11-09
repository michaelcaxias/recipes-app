import { screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/Header';
import renderWithRouter from './renderWithRouter';

const dataBtnSearchIcon = 'search-top-btn';
const dataBtnProfile = 'profile-top-btn';

describe('Testando Header.js', () => {
  test('se elementos do Header estão na tela', () => {
    renderWithRouter(<Header />);
    const btnSearch = screen.getByTestId(dataBtnSearchIcon);
    const btnProfile = screen.getByTestId(dataBtnProfile);
    expect(btnSearch).toBeInTheDocument();
    expect(btnProfile).toBeInTheDocument();
  });
});
