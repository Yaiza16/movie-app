import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import getMovieMainData from '../helpers/movieInfo/getMovieMainData';
import getMovieCast from '../helpers/movieInfo/getMovieCast';
import getRecommendations from '../helpers/movieInfo/getRecommendations';
import getVideo from '../helpers/movieInfo/getVideo';
// import axiosMainData from '../helpers/axios/axiosMainData';
// import getMovieMainData from '../helpers/movieInfo/getMovieMainData';
// import getMovieMainData from '../helpers/movieInfo/getMovieMainData';

const baseApiCall = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

const DetailsPage1 = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getMainData() {
      const resMainData = await axios.get(
        `${baseApiCall}/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const { data: dataMainData } = resMainData;
      const newMovie = getMovieMainData(dataMainData);
      return newMovie;
    }
    // async function prueba(URL, getFunction) {
    //   const res = await axios.get(URL);
    //   const { data } = res;
    //   const newMovie = getFunction(data);
    //   return newMovie;
    // }

    async function getCast() {
      const resCast = await axios.get(
        `${baseApiCall}/movie/${id}/credits?api_key=${API_KEY}`
      );
      const { data: dataCast } = resCast;
      const newMovie = getMovieCast(dataCast);
      return newMovie;
    }

    async function getRecs() {
      const resRec = await axios.get(
        `${baseApiCall}/movie/${id}/recommendations?api_key=${API_KEY}`
      );
      const { data: dataRec } = resRec;
      const newMovie = getRecommendations(dataRec);
      return newMovie;
    }

    async function getVideos() {
      const resVideos = await axios.get(
        `${baseApiCall}/movie/${id}/videos?api_key=${API_KEY}`
      );
      const { data: dataVideos } = resVideos;
      const newMovie = getVideo(dataVideos);
      return newMovie;
    }

    const finalRequest = async () => {
      const infoMainData = await getMainData();
      const infoCast = await getCast();
      const recommendations = await getRecs();
      const videos = await getVideos();

      const infoTotal = {
        ...infoMainData,
        ...infoCast,
        recommendations,
        videos,
      };
      console.log(infoTotal);
      setMovie(infoTotal);
    };

    finalRequest();
  }, [id]);
  return (
    <div className="Hola">
      <p>{movie.overview}</p>
    </div>
  );
};

export default DetailsPage1;
