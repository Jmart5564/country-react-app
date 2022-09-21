import { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/countries';
import CountryCard from '../Country/Country';

export default function Main() {
  fetchCountries();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      {countries.map(country => <CountryCard key={country.id} { ...country } />)}
    </main>
  );
}