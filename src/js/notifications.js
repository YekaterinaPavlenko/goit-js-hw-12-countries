import * as PNotify from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

// console.log(PNotify);
const notFoundCountry = function notFound() {
  PNotify.notice({
    text: 'Country not found. Please check your request and try again!',
  });
};
// console.log(notFoundCountry);
const overflowCountriesList = function overflowList() {
  PNotify.info({
    text: '"Too many matches found. Please enter a more specific query! ',
  });
};
// console.log(overflowCountriesList);
const errorRequest = function errReq() {
  PNotify.error({
    text: 'Request error!',
  });
};
// console.log(errorRequest);
export default { notFoundCountry, overflowCountriesList, errorRequest };
