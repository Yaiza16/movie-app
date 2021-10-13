const getYear = (date) => {
  const year = new Date(date);
  const movieYear = year.getFullYear();
  return movieYear;
};

const getDuration = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}min`;
};

const getMovieMainData = (data) => ({
  name: data.title,
  id: data.id,
  year: getYear(data.release_date),
  duration: getDuration(data.runtime),
  backdrop_path: data.backdrop_path,
  poster_path: data.poster_path,
  vote_average: data.vote_average,
  genres: data.genres,
  overview: data.overview,
  mediaType: 'movie',
});

export default getMovieMainData;
