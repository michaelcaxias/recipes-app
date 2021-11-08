import { useEffect, useState } from 'react';

// Hook customizado feito com ajuda site abaixo
// https://dev.to/keyurparalkar/creating-custom-hook-for-fetching-data-in-react-3mo3
export default function useFetch(URL, MOCK) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setDataFetch] = useState([]);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchAPI = async () => {
      try {
        const response = await fetch(URL);
        const resolve = await response.json();

        setDataFetch(resolve);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setDataFetch(MOCK);
        setIsLoading(false);
      }
    };
    fetchAPI();
  }, [URL, MOCK]);

  return [data, isLoading, serverError];
}

// const [ data ] = useFetch(URL, MOCK)
