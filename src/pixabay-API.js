import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34628461-4bda2ae404146a46c3fd3a186';

const baseSearchParams = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

export const fetchImages = async (q, page) => {
  try {
    const { data } = await axios.get(`${BASE_URL}`, {
      params: { ...baseSearchParams, q, page },
    });
    return data;
  } catch (error) {
    iziToast.error({
      message: `${error.message}`,
      layout: 2,
      position: 'topLeft',
      transitionIn: 'fadeInRight',
      transitionOut: 'fadeOutLeft',
    });
    throw new Error(error);
  }
};
