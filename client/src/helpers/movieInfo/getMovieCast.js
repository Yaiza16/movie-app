const getDirectors = (data) => {
  return data.filter((person) => person.job === 'Director');
};
const getScreenPlayers = (data) => {
  return data.filter((person) => person.job === 'Screenplay');
};
const getWriters = (data) => {
  return data.filter((person) => person.job === 'Story');
};

const getMovieCast = (data) => ({
  cast: data.cast,
  directors: getDirectors(data.crew),
  screenPlayers: getScreenPlayers(data.crew),
  writers: getWriters(data.crew),
});

export default getMovieCast;
