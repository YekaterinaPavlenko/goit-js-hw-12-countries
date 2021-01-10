import refs from './refs.js';
import countryListTemplate from '../tamplates/countriesList.hbs';
import countryInfoTemplate from '../tamplates/countryInfo.hbs';
import notifications from './notifications.js';

function updateMarcup(result) {
  // console.log(result);
  if (result === undefined) {
    notifications.notFoundCountry();
  } else if (result.length > 10) {
    notifications.overflowCountriesList();
    // console.log(notifications.overflowCountriesList);
  } else if (result.length <= 10 && result.length > 1) {
    refs.boxRef.innerHTML = '';
    const countriesList = countryListTemplate(result);
    refs.boxRef.insertAdjacentHTML('beforeend', `${countriesList}`);
  } else if (result.length === 1) {
    refs.boxRef.innerHTML = '';

    const countryInfo = countryInfoTemplate(result);
    refs.boxRef.insertAdjacentHTML('beforeend', `${countryInfo}`);
  }
}
export default updateMarcup;
