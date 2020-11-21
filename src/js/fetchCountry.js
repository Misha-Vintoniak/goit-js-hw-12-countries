const URL = 'https://restcountries.eu/rest/v2';
export default function fetchCountries(searchCountry) {
  return fetch(`${URL}/name/${searchCountry}`).then(response => {
    return response.json();
  });
}
