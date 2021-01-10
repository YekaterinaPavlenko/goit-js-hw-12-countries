const debounce = require('lodash.debounce');

import refs from './refs.js';
import notifications from './notifications.js';
import fetchCountries from './fetchCountries.js';
import updateMarcup from './markup.js';
// console.log(refs.boxRef);
// console.log(refs.inputRef);
refs.inputRef.addEventListener('input', debounce(searchCountry, 500));
function searchCountry(event) {
  event.preventDefault();

  if (event.target.value.charAt(0) === ' ') {
    event.target.value = '';
    notifications.notFoundCountry();
  } else if (event.target.value !== '') {
    // console.log(event.target.value);
    refs.boxRef.innerHTML = '';
    const inputValue = event.target.value;
    fetchCountries(inputValue)
      .then(updateMarcup)
      .catch(notifications.errorRequest);
  }
}
