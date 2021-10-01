import React from 'react';
import './Card.scss';
import { SwiperSlide } from 'swiper/react';

const baseUrlImage = 'https://image.tmdb.org/t/p/original';

const Card = ({ movie }) => {
  return (
    <div className="swipper-wrapped">
      <SwiperSlide className="movie-card-container">
        <img
          className="movie-poster"
          src={`${baseUrlImage}${movie.poster_path} `}
          alt="{movie.original_title || movie.original_name}"
        />
      </SwiperSlide>
    </div>
  );
};

export default Card;
