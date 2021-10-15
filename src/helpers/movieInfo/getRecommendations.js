const orderRecommendations = (data) => {
  const recommendations = data.cast.sort((a, b) => {
    if (a.popularity > b.popularity) return -1;
    return a.popularity < b.popularity ? 1 : 0;
  });
  return recommendations;
};

const getRecommendations = (data) => data.results;

export const getRecommendationsPerson = (data) => {
  const recommendations = orderRecommendations(data);
  return recommendations;
};

export default getRecommendations;
