import notifications from './notifications.js';
import countryListTemplate from '../tamplates/countriesList.hbs';
import updateMarcup from'./markup.js';
function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  const fetchCountry = fetch(url);
  // console.log(fetchCountry);
  fetchCountry
    .then(response => {
      if (response.status !== 200) {
        console.log('errrrroooorrrr');
        return error;
      }
      // console.log(response.json());
      return response.json();
    }).then(result => {
      console.log(result);
      updateMarcup(result)})
    // .catch(notifications.errorRequest);
}
// console.log(fetch(url));

export default fetchCountries;
