import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../app/globals.css';

const fetchCountries = async () => {
  try {
    const res = await fetch('api/public/countries', { method: 'GET' });
    const data = await res.json();
    return data.countries;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fetchStates = async () => {
  try {
    const res = await fetch('api/public/states');
    const data = await res.json();
    return data.states;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default function Page() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCountries = await fetchCountries();
      const fetchedStates = await fetchStates();
      setCountries(fetchedCountries);
      setStates(fetchedStates);
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Homepage!</h1>

      {[
        { href: 'account/login', label: 'Login' },
        { href: 'account/signup', label: 'Signup' },
        { href: 'packages/promopage/promo', label: 'Package List page' },
        { href: 'packages/details', label: 'Package Detail page' },
        { href: 'home/home', label: 'Home page' },
      ].map((link, index) => (
        <div key={index} className="mb-2">
          <Link href={link.href} className="text-blue-500 hover:underline">
            {link.label}
          </Link>
        </div>
      ))}

      <hr />

      {countries && countries.map((country) => (
        <div key={country.id} className="mb-2">
          <Link href={'world/' + country.name}>
            {country.name}
          </Link>
        </div>
      ))}

      {states && states.map((state) => (
        <div key={state.id} className="mb-2">
          <Link href={'india/' + state.pageUrl}>
            {state.name}
          </Link>
        </div>
      ))}

    </div>
  );
}
