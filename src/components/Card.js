import React from 'react';
import './Card.scss';
import { SwiperSlide } from 'swiper/react';

const baseUrlImage = 'https://image.tmdb.org/t/p/original';

const Card = ({ movie, main }) => {
  return (
    <div className="swipper-wrapped">
      {main ? (
        <SwiperSlide className="movie-card-container">
          <img
            className="movie-poster"
            src={`${baseUrlImage}${movie.poster_path} `}
            alt={movie.title || movie.name}
          />
        </SwiperSlide>
      ) : (
        <SwiperSlide className="movie-card-container movie-card-container--back">
          <div className="card-info">
            <p className="card-info-title">{movie.title || movie.name}</p>
          </div>
          <img
            className="movie-poster"
            src={`${baseUrlImage}${movie.backdrop_path} `}
            alt={movie.title || movie.name}
          />
        </SwiperSlide>
      )}
    </div>
  );
};

export default Card;
