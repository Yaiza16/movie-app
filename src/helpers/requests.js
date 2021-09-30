const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrendies: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
};

export default requests;
