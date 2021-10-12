import { useState } from 'react';
import axiosCast from '../helpers/axios/axiosCast';
import axiosMainData from '../helpers/axios/axiosMainData';
import axiosRecommendations from '../helpers/axios/axiosRecommendations';
import axiosVideo from '../helpers/axios/axiosVideo';
import getMovieCast from '../helpers/movieInfo/getMovieCast';
import getMovieMainData from '../helpers/movieInfo/getMovieMainData';
import getRecommendations from '../helpers/movieInfo/getRecommendations';
import getVideo from '../helpers/movieInfo/getVideo';

const useMovie = () => {
  const [movieNew, setMovieNew] = useState(null);

  const getNewMovie = async (id, type) => {
    const infoCast = await axiosCast(id, type);
    const movieCast = getMovieCast(infoCast);

    const infoMainData = await axiosMainData(id, type);
    const movieMainData = getMovieMainData(infoMainData);

    const infoRecommendations = await axiosRecommendations(id, type);
    const movieRecommendations = getRecommendations(infoRecommendations);

    const infoVideo = await axiosVideo(id, type);
    const movieVideo = getVideo(infoVideo);

    setMovieNew({ movieCast, movieMainData, movieRecommendations, movieVideo });
  };
  return { movieNew, setMovieNew, getNewMovie };
};

export default useMovie;