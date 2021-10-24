import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import MovieRecommendations from 'components/DetailsMovie/MovieRecommendations';
import MovieCredits from 'components/DetailsMovie/MovieCredits';
import MovieHeader from 'components/DetailsMovie/MovieHeader';
import OverviewMovie from 'components/DetailsMovie/OverviewMovie';
import MovieTrailer from 'components/DetailsMovie/MovieTrailer';

import PosterMovie from 'components/DetailsMovie/PosterMovie';
import useMovie from 'hooks/useMovie';
import useTv from 'hooks/useTv';

import './DetailsPage.scss';
import Loader from 'vendors/Loader/Loader';

const DetailsPage = ({ type }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getNewMovie } = useMovie();
  const { getNewTv } = useTv();

  // useEffect(() => {
  //   const getInformation = async () => {
  //     let data;
  //     if (type === 'movie') {
  //       data = await getNewMovie(id, 'movie');
  //     } else {
  //       data = await getNewTv(id, 'tv');
  //     }
  //     setMovie(data);
  //   };
  //   getInformation();
  // }, [id]);

  const getInformation = useCallback(async () => {
    let data;
    setIsLoading(true);
    if (type === 'movie') {
      data = await getNewMovie(id, 'movie');
    } else {
      data = await getNewTv(id, 'tv');
    }
    setMovie(data);
    setIsLoading(false);
  }, [getNewMovie, getNewTv, id, type]);

  useEffect(() => {
    getInformation();
  }, [id]);

  return (
    <div className="details-page-container">
      {isLoading ? (
        <div className="details-page-loader-container">
          <Loader />
        </div>
      ) : (
        <div className="details-page">
          <PosterMovie movie={movie} />
          <div className="info-movie-container">
            <div className="info-movie">
              <MovieHeader movie={movie} type={type} key={movie.id} />
              <OverviewMovie movie={movie} />
              <MovieCredits movie={movie} type={type} />
              <MovieTrailer movie={movie} />
              <MovieRecommendations
                recommendations={movie.movieRecommendations}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
