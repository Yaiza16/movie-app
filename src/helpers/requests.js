const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrendies: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchMoviesTopRated: `
  https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchSeriesTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
