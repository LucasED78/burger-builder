import axios from 'axios';

const api = axios.create({
  baseURL: 'https://burger-builder-4dc75.firebaseio.com'
});

export default api;