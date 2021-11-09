async function requestRecipes(url, data, setData, key) {
  const request = await fetch(url);
  const response = await request.json();
  setData(response[key]);
}

export default requestRecipes;
