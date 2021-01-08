import fetchCountries from './fetchCountries.js';
import countryListTemplate from '../tamplates/countriesList.hbs';
import countryInfoTemplate from '../tamplates/countryInfo.hbs';
const debounce = require('lodash.debounce');
// const { default: fetchCountries } = require('./fetchCountries');
const bodyRef = document.querySelector('.body');
bodyRef.insertAdjacentHTML(
  'afterbegin',
  '<input class="input" type="text" placeholder="Введите название страны" id="name-input" />',
);


const inputRef = document.querySelector('#name-input');
// console.log(inputRef);
inputRef.addEventListener('input', debounce(inputCountry, 500));
function inputCountry(event) {
  event.preventDefault();
  if (event.target.value.charAt(0) === ' ') {
    event.target.value = '';
  }
  // console.log(event.target.value);
  const inputValue = event.target.value;
  // console.log(inputValue);
  fetchCountries(inputValue);
  // console.log(fetchCountries(inputValue));
  
}
// // console.log(setCountry);

// console.log(inputCountry);
function updateMarcup(result) {
  console.log(result);
  if (result.length > 10) {
    notifications.overflowCountriesList();
    // console.log(notifications.overflowCountriesList);
  } else if (result.length <= 10 && result.length > 1) {
     const countriesList = countryListTemplate(result);
     bodyRef.insertAdjacentHTML(
      'beforeend', `${countriesList}`
    );
  }else if(result.length === 1) {
    bodyRef.innerHTML = '';
    const countryInfo = countryInfoTemplate(result);
    bodyRef.insertAdjacentHTML(
      'beforeend', `${countryInfo}`
    );
  }
}
export default updateMarcup;