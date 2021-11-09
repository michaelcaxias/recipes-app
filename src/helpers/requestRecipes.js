async function requestRecipes(url, data, setData, key) {
  const request = await fetch(url);
  const response = await request.json();
  setData(...data, response[key]);
}

export default requestRecipes;
