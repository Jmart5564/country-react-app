// import { useEffect, useState } from 'react';
// import { fetchCountries } from '../../services/countries';
import CountryCard from '../Country/Country';
import Filter from '../Filter/Filter';
import useCountries from '../hooks/useCountries';

export default function Main() {
  const { filterCountries, continent, setContinent } = useCountries();


  return (
    <main>
      <Filter setContinent={setContinent} continent={continent} />
      {filterCountries().map(country => <CountryCard key={country.id} { ...country } />)}
    </main>
  );
}