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
  name: data.name,
  year: getYear(data.release_date),
  duration: getDuration(data.runtime),
});

export default getMovieMainData;