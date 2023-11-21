import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '34628461-4bda2ae404146a46c3fd3a186';

export const fetchImages = async (query, page) => {
  const params = {
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
  };
  try {
    const { data } = await axios.get(`${BASE_URL}`, { params });
    return data;
  } catch (error) {
    throw new Error(err.message);
  }
};
