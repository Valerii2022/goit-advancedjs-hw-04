import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.input'),
  searchBtn: document.querySelector('.search-btn'),
  list: document.querySelector('.image-list'),
};

refs.form.addEventListener('submit', handleSeachBtnClick);

function handleSeachBtnClick(e) {
  e.preventDefault();
  console.log(e.currentTarget.searchQuery.value.trim());
  e.currentTarget.reset();
}

//   iziToast.error({
//     title: 'Error',
//     message: `Oops! Something went wrong! Try reloading the page!`,
//     layout: 2,
//     position: 'topLeft',
//     transitionIn: 'fadeInRight',
//     transitionOut: 'fadeOutLeft',
//   });
