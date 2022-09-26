import { fetchCountries } from '../../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (e) {
        setError('Something has gone wrong');
      }
    }
    fetchData();

  }, []);

  const filterCountries = () => {
    if (continent === 'all') return countries;
    return countries.filter((country) => country.continent === continent);
  };
  return { filterCountries, continent, setContinent, error };
}