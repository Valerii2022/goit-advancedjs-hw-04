import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '34628461-4bda2ae404146a46c3fd3a186';

// export const fetchImages = async (query, page) => {
//   const params = {
//     key: KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page,
//   };
//   try {
//     const { data } = await axios.get(`${BASE_URL}`, { params });
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

export class PixabayAPI {
  #API_KEY = '34628461-4bda2ae404146a46c3fd3a186';
  #BASE_API = 'https://pixabay.com/api/';

  baseSearchParams = {
    key: this.#API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  async fetchPhotos(page, query) {
    try {
      const { data } = await axios.get(`${this.#BASE_API}`, {
        params: { ...this.baseSearchParams, page, q: query },
      });
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
