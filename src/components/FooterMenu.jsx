import React from 'react';
import { useHistory } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/footerMenu.css';

function FooterMenu() {
  const history = useHistory();

  return (
    <footer data-testid="footer">
      <button
        type="button"
        onClick={ () => history.push('/bebidas') }
        data-testid="btn-drinks"
      >
        <img src={ drinkIcon } alt="drink" data-testid="drinks-bottom-btn" />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/explorar') }
        data-testid="btn-explorer"
      >
        <img src={ exploreIcon } alt="explore" data-testid="explore-bottom-btn" />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/comidas') }
        data-testid="btn-food"
      >
        <img src={ mealIcon } alt="meal" data-testid="food-bottom-btn" />
      </button>
    </footer>
  );
}

export default FooterMenu;
