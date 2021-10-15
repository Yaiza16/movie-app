import axiosRequest from '../helpers/axios/axiosRequest';
import getPersonMainData from '../helpers/personInfo/getPersonMainData';

const usePerson = () => {
  const getNewPerson = async (id, type) => {
    const personMainData = getPersonMainData(await axiosRequest(id, type));

    const variable = { ...personMainData };
    console.log(variable);
    return variable;
  };

  return { getNewPerson };
};

export default usePerson;
