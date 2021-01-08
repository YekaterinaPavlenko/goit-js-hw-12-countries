const debounce = require('lodash.debounce');
const bodyRef = document.querySelector('.body');
bodyRef.insertAdjacentHTML(
  'afterbegin',
  '<input class="input" type="text" placeholder="Введите название страны" id="name-input" />',
);
// let inputCountry;
const inputRef = document.querySelector('#name-input');
// console.log(inputRef);
inputRef.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    if (event.target.value.charAt(0) === ' ') {
      event.target.value = '';
    }
    // inputCountry = event.target.value;
    console.log(event.target.value);
    return event.target.value;
  }, 500),
);
// console.log(setCountry);

// console.log(inputCountry);
