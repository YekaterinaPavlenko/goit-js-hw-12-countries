import * as PNotify from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

// console.log(PNotify);
const notFoundCountry = function notFound() {
  PNotify.notice({
    text:
      'По Вашему запросу страна не найдена. Проверьте, пожалуйста, правильность ввода страны и повторите попытку.',
  });
};
// console.log(notFoundCountry);
const overflowCountriesList = function overflowList() {
  PNotify.info({
    text: 'Список найденных стран переполнен. Введите более специфичный запрос',
  });
};
// console.log(overflowCountriesList);
const errorRequest = function errReq() {
  PNotify.error({
    text: 'Произошла ошибка запроса. Повторите, пожалуйста, запрос.',
  });
};
// console.log(errorRequest);
export default { notFoundCountry, overflowCountriesList, errorRequest };
