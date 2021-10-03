const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrendies: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchMoviesTopRated: `
  https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchSeriesTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchSeriesPopularity: `
  https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&vote_count.gte=5000&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
};

export default requests;
