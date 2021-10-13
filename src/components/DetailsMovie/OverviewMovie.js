import React from 'react';
import './OverviewMovie.scss';

const OverviewMovie = ({ movie }) => {
  return (
    <div className="overview-movie-container">
      <p className="overview-movie">{movie.overview}</p>
    </div>
  );
};

export default OverviewMovie;
