import axiosRequest from '../helpers/axios/axiosRequest';

import getRecommendations from '../helpers/movieInfo/getRecommendations';
import getTvCast from '../helpers/movieInfo/getTvCast';
import getTvMainData from '../helpers/movieInfo/getTvMainData';
import getVideo from '../helpers/movieInfo/getVideo';

const useTv = () => {
  const getNewTv = async (id, type) => {
    const tvCast = getTvCast(await axiosRequest(id, type, 'credits'));
    const tvMainData = getTvMainData(await axiosRequest(id, type));
    const movieRecommendations = getRecommendations(
      await axiosRequest(id, type, 'recommendations')
    );
    const video = getVideo(await axiosRequest(id, type, 'videos'));

    const variable = {
      ...tvMainData,
      ...tvCast,
      video,
      movieRecommendations,
    };
    console.log(variable);

    return variable;
  };
  return { getNewTv };
};

export default useTv;
