const filterRecommendations = (data) => {
  const notRecommendations = [
    562, 59941, 2224, 1900, 1220, 1489, 1667, 62223, 63770, 4573,
  ];
  const recommendations = data.filter(
    (item) => !notRecommendations.includes(item.id)
  );
  return recommendations;
};

const orderRecommendations = (data) => {
  const recommendations = data.cast.sort((a, b) => {
    if (a.popularity > b.popularity) return -1;
    return a.popularity < b.popularity ? 1 : 0;
  });
  // return recommendations;
  return filterRecommendations(recommendations);
};

const getRecommendations = (data) => data.results;

export const getRecommendationsPerson = (data) => {
  const recommendations = orderRecommendations(data);
  return recommendations;
};

export default getRecommendations;
