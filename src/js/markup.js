const bodyRef = document.querySelector('.body');
bodyRef.insertAdjacentHTML(
  'afterbegin',
  '<input class= "input" type="text" placeholder="Введите название страны" id="name-input" />',
);

// const heading = document.createElement('h1');
// image.setAttribute('src', 'https://placeimg.com/640/480/nature');

// const inputRef = document.querySelector('#name-input');
// inputRef.addEventListener('input', event => {
//   if (event.target.value.charAt(0) === ' ') {
//     event.target.value = '';
//   }
//   outputRef.textContent =
//     event.target.value === '' ? `незнакомец` : event.target.value;
//   // event.target.value === '' ? outputRef.textContent = `незнакомец` : outputRef.textContent = event.target.value;
// });
