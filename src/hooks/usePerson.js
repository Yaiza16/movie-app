import axiosRequest from 'helpers/axios/axiosRequest';
import { getRecommendationsPerson } from 'helpers/movieInfo/getRecommendations';
import getPersonMainData from 'helpers/personInfo/getPersonMainData';

const usePerson = () => {
  const getNewPerson = async (id, type) => {
    const personMainData = getPersonMainData(await axiosRequest(id, type));
    const personRecommendations = getRecommendationsPerson(
      await axiosRequest(id, type, 'combined_credits')
    );

    const variable = { ...personMainData, personRecommendations };
    return variable;
  };

  return { getNewPerson };
};

export default usePerson;
