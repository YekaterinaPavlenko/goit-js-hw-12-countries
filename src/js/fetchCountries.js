function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url).then(response => {
    // console.log(response);
    if (response.status === 404) {
      // console.log('not found');
      return error;
    } else if (response.status === 200) {
      // console.log(response.json());
      return response.json();
    }
  });
}

export default fetchCountries;

// http://joxi.ru/L21xWGVc0WK14m
