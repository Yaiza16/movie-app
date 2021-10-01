import React from 'react';
import './Card.scss';

const baseUrlImage = 'https://image.tmdb.org/t/p/original';

const Card = ({ movie }) => {
  return (
    <div>
      <div className="movie-card-container">
        <img
          className="movie-poster"
          src={`${baseUrlImage}${movie.poster_path} `}
          alt="{movie.original_title || movie.original_name}"
        />
      </div>
    </div>
  );
};

export default Card;
