import { useEffect } from 'react';

export default function useMeals(data, setData, url, key) {
  useEffect(() => {
    async function requestCategories() {
      const request = await fetch(url);
      const response = await request.json();
      console.log(response[key]);
      setData(response[key]);
      console.log(data);
    }
    requestCategories();
  }, [data, setData, url, key]);
}
