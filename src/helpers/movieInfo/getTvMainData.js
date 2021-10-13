const getYear = (date) => {
  const year = new Date(date);
  const movieYear = year.getFullYear();
  return movieYear;
};

const getDate = (inProduction, firstAirDate, lastAirDate) => {
  const firstYear = getYear(firstAirDate);
  const lastYear = getYear(lastAirDate);

  if (inProduction) {
    return `${firstYear} --`;
  }
  return `${firstYear} -- ${lastYear}`;
};

const getDuration = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}min`;
};

const getTvMainData = (data) => ({
  name: data.name,
  seasons: data.number_of_seasons,
  inProduction: data.in_production,
  firstAirDate: data.first_air_date,
  lastAirDate: data.last_air_date,
  date: getDate(data.in_production, data.first_air_date, data.last_air_date),
  duration: getDuration(data.runtime),
  backdrop_path: data.backdrop_path,
  poster_path: data.poster_path,
  vote_average: data.vote_average,
  genres: data.genres,
  overview: data.overview,
  mediaType: 'tv',
});

export default getTvMainData;
