const getDirectors = (data) => {
  return data.filter((person) => person.job === 'Director');
};
const getProducers = (data) => {
  return data.filter((person) => person.job === 'Producer');
};
const getWriters = (data) => {
  return data.filter((person) => person.job === 'Writer');
};

const getTvCast = (data) => ({
  cast: data.cast,
  directors: getDirectors(data.crew),
  producers: getProducers(data.crew),
  writers: getWriters(data.crew),
});

export default getTvCast;
