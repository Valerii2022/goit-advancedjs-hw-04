import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './pixabay-API';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.input'),
  searchBtn: document.querySelector('.search-btn'),
  list: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  sentinel: document.querySelector('.sentinel'),
};

let page = 1;
let query = '';
let uploadedImages = 0;
let totalImages = 0;
let modalLightbox;

refs.form.addEventListener('submit', handleSeachBtnClick);

function handleSeachBtnClick(e) {
  e.preventDefault();
  refs.loader.classList.remove('hidden');
  if (!e.currentTarget.searchQuery.value.trim()) {
    iziToast.error({
      message: `Sorry, your search query is empty. Please try again.`,
      layout: 2,
      position: 'topLeft',
      transitionIn: 'fadeInRight',
      transitionOut: 'fadeOutLeft',
    });
    refs.loader.classList.add('hidden');
    return;
  }
  page = 1;
  query = '';
  uploadedImages = 0;
  totalImages = 0;
  fetchImages(e.currentTarget.searchQuery.value.trim(), page)
    .then(data => {
      onSuccess(data);
    })
    .catch(err => {
      refs.loader.classList.add('hidden');
      console.log(err);
    });
  query = e.currentTarget.searchQuery.value.trim();
  e.currentTarget.reset();
}

function onSuccess(data) {
  refs.loader.classList.add('hidden');
  if (!data.totalHits) {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please try again.`,
      layout: 2,
      position: 'topLeft',
      transitionIn: 'fadeInRight',
      transitionOut: 'fadeOutLeft',
    });
    return;
  }
  page += 1;
  totalImages = data.totalHits;
  uploadedImages += data.hits.length;
  iziToast.success({
    message: `Hooray! We found ${data.totalHits} images.`,
    layout: 2,
    position: 'topLeft',
    transitionIn: 'fadeInRight',
    transitionOut: 'fadeOutLeft',
  });
  refs.list.innerHTML = markup(data);
  modalLightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });
  modalLightbox.refresh();
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

function loadMoreImages() {
  modalLightbox.destroy();
  fetchImages(query, page)
    .then(data => {
      refs.list.insertAdjacentHTML('beforeend', markup(data));
      page += 1;
      uploadedImages += data.hits.length;
      modalLightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
      });
      modalLightbox.refresh();
    })
    .catch(err => {
      iziToast.error({
        message: `Something went wrong. Please try again!`,
        layout: 2,
        position: 'topLeft',
        transitionIn: 'fadeInRight',
        transitionOut: 'fadeOutLeft',
      });
      console.log(err);
    });
}

const intersectionObserve = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && query !== '' && uploadedImages < totalImages) {
      loadMoreImages();
    }
  });
};

const observer = new IntersectionObserver(intersectionObserve, {
  rootMargin: '200px',
});

observer.observe(refs.sentinel);
