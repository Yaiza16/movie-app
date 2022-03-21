const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrendies: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchMoviesTopRated: `
  https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchSeriesTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchSeriesPopularity: `
  https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&vote_count.gte=5000&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
  fetchMoviesAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchMoviesScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchMoviesRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMoviesHistory: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchMoviesHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchMoviesDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchMoviesFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchSeriesCrime: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchSeriesAnimation: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchSeriesDrama: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchSeriesComedy: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchSeriesReality: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fetchSeriesAction: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchSeriesKids: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  fetchSeriesMistery: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=9648`,
};

export default requests;
