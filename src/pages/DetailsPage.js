import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCredits from '../components/DetailsMovie/MovieCredits';
import MovieHeader from '../components/DetailsMovie/MovieHeader';
import OverviewMovie from '../components/DetailsMovie/OverviewMovie';
import MovieTrailer from '../components/DetailsMovie/MovieTrailer';

import PosterMovie from '../components/DetailsMovie/PosterMovie';
import useMovie from '../hooks/useMovie';
import useTv from '../hooks/useTv';

import './DetailsPage.scss';
import MovieRecommendations from '../components/DetailsMovie/MovieRecommendations';

const DetailsPage = ({ type }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const { getNewMovie } = useMovie();
  const { getNewTv } = useTv();

  useEffect(() => {
    const getInformation = async () => {
      let data;
      if (type === 'movie') {
        data = await getNewMovie(id, 'movie');
      } else {
        data = await getNewTv(id, 'tv');
      }
      setMovie(data);
    };
    getInformation();
  }, [id, getNewMovie, getNewTv, type]);

  return (
    <div className="details-page-container">
      <div className="details-page">
        <PosterMovie movie={movie} />
        <div className="info-movie-container">
          <div className="info-movie">
            <MovieHeader movie={movie} type={type} />
            <OverviewMovie movie={movie} />
            <MovieCredits movie={movie} type={type} />
            <MovieTrailer movie={movie} />
            <MovieRecommendations
              recommendations={movie.movieRecommendations}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
