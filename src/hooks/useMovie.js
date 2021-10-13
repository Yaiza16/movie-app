import axiosRequest from '../helpers/axios/axiosRequest';
import getMovieCast from '../helpers/movieInfo/getMovieCast';
import getMovieMainData from '../helpers/movieInfo/getMovieMainData';
import getRecommendations from '../helpers/movieInfo/getRecommendations';
import getVideo from '../helpers/movieInfo/getVideo';

const useMovie = () => {
  const getNewMovie = async (id, type) => {
    // const movieCast = getMovieCast(await axiosCast(id, type));
    // const movieMainData = getMovieMainData(await axiosMainData(id, type));
    // const movieRecommendations = getRecommendations(
    //   await axiosRecommendations(id, type)
    // );
    const movieCast = getMovieCast(await axiosRequest(id, type, 'credits'));
    const movieMainData = getMovieMainData(await axiosRequest(id, type));
    const movieRecommendations = getRecommendations(
      await axiosRequest(id, type, 'recommendations')
    );
    const video = getVideo(await axiosRequest(id, type, 'videos'));
    // const video = getVideo(await axiosVideo(id, type));

    console.log(movieRecommendations);

    const variable = {
      ...movieMainData,
      ...movieCast,
      movieRecommendations,
      video,
    };
    console.log(variable);
    return variable;
  };
  return { getNewMovie };
};

export default useMovie;
