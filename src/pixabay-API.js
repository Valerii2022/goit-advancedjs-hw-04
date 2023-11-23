import axios from 'axios';

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
  const { data } = await axios.get(`${BASE_URL}`, {
    params: { ...baseSearchParams, q, page },
  });
  return data;
};
