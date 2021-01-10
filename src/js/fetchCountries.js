function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) {
      // console.log('not found');
    } else if (response.status === 200) {
      // console.log(response.json());
      return response.json();
    }
  });
}

export default fetchCountries;
