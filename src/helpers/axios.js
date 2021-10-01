import axios from 'axios';

const baseRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default baseRequest;
