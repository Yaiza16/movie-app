import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCredits from '../components/DetailsMovie/MovieCredits';
import MovieHeader from '../components/DetailsMovie/MovieHeader';
import OverviewMovie from '../components/DetailsMovie/OverviewMovie';
import MovieTrailer from '../components/DetailsMovie/MovieTrailer';

import PosterMovie from '../components/DetailsMovie/PosterMovie';
import useMovie from '../hooks/useMovie';
import './DetailsPage3.scss';
import MovieRecommendations from '../components/DetailsMovie/MovieRecommendations';

const DetailsPage3 = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const { getNewMovie } = useMovie();

  useEffect(() => {
    const getInformation = async () => {
      const data = await getNewMovie(id, 'movie');
      setMovie(data);
    };
    getInformation();
  }, [id]);

  return (
    <div className="details-page-container">
      <div className="details-page">
        <PosterMovie movie={movie} />
        <div className="info-movie-container">
          <div className="info-movie">
            <MovieHeader movie={movie} />
            <OverviewMovie movie={movie} />
            <MovieCredits movie={movie} />
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

export default DetailsPage3;
