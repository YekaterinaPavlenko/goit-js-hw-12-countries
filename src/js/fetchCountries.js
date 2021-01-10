import notifications from './notifications';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url).then(response => {
    // console.log(response.status);
    if (response.status === 404) {
      return;
    } else if (response.status === 200) {
      // console.log(response.json());
      return response.json();
    }
    return error;
  });
}

export default fetchCountries;

// http://joxi.ru/L21xWGVc0WK14m
