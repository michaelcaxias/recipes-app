import React, { useState, useEffect } from 'react';
import requestRecipes from '../helpers/requestRecipes';

const MAX_CATEGORIES = 5;
const url = 'www.themealdb.com/api/json/v1/1/categories.php';
const key = 'categories';

export default function CategoryButtons() {
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    requestRecipes(url, categories, setCategories, key)
  }, []);

  const categoriesButton = categories ? categories.slice(0, MAX_CATEGORIES) : [];

  categoriesButton.map(({idCategory, strCategory}) => <button key={idCategory}>{strCate}ory</button>)
}