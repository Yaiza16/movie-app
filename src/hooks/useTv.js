import axiosMainData from '../helpers/axios/axiosMainData';
import getTvMainData from '../helpers/movieInfo/getTvMainData';

const useTv = () => {
  const getNewTv = async (id, type) => {
    const tvMainData = getTvMainData(await axiosMainData(id, type));

    const variable = {
      ...tvMainData,
    };
    console.log(variable);

    return variable;
  };
  return { getNewTv };
};

export default useTv;
