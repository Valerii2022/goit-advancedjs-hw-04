// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
import { PixabayAPI } from './pixabay-API';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.input'),
  searchBtn: document.querySelector('.search-btn'),
  list: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const pixabayApi = new PixabayAPI();

let page = 1;

refs.form.addEventListener('submit', handleSeachBtnClick);

function handleSeachBtnClick(e) {
  e.preventDefault();
  refs.loader.classList.remove('hidden');
  pixabayApi
    .fetchPhotos(e.currentTarget.searchQuery.value.trim(), page)
    .then(data => {
      onSuccess(data);
    })
    .catch(err => {
      refs.loader.classList.add('hidden');
      console.log(err);
    });

  e.currentTarget.reset();
}

function onSuccess(data) {
  refs.loader.classList.add('hidden');
  refs.list.innerHTML = markup(data);
  //   refs.list.insertAdjacentHTML('beforeend', markup(data));
}

function markup({ hits }) {
  const result = hits
    .map(el => {
      return `<a class="link" href=${el.largeImageURL} id=${el.id}><div class="photo-card" >
    <div class="img-wrap"><img src=${el.webformatURL} alt=${el.tags} loading="lazy" /></div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            <span>${el.likes}</span>
        </p>
        <p class="info-item">
            <b>Views</b>
            <span>${el.views}</span>
        </p>
        <p class="info-item">
            <b>Comments</b>
            <span>${el.comments}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b>
            <span>${el.downloads}</span>
        </p>
    </div>
</div></a>`;
    })
    .join('');
  return result;
}

//   iziToast.error({
//     title: 'Error',
//     message: `Oops! Something went wrong! Try reloading the page!`,
//     layout: 2,
//     position: 'topLeft',
//     transitionIn: 'fadeInRight',
//     transitionOut: 'fadeOutLeft',
//   });

// new SimpleLightbox('.link');
