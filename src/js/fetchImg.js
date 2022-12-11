import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31504309-4e793d3dbdef844138d67a957';

async function fetchImages(q, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
