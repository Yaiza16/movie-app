import React from 'react';
import './PosterMovie.scss';

const PosterMovie = ({ movie }) => {
  return (
    <div className="poster-container">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.name || movie.title}
        className="poster-img"
      />
    </div>
  );
};

export default PosterMovie;
