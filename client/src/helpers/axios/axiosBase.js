import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const TmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US',
    responseType: 'json',
  },
});

export default TmdbApi;
