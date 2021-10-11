import React, { useEffect, useState } from 'react';
import './Card.scss';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const baseUrlImage = 'https://image.tmdb.org/t/p/original';

const Card = ({ movie, main, media }) => {
  const [mediaType, setMediaType] = useState('');
  // const location = useLocation();
  // const query = new URLSearchParams(location.search);

  useEffect(() => {
    // query.set('id', movie.id);
    if (media === 'all') {
      setMediaType(movie.media_type);
    } else {
      setMediaType(media);
    }
  }, []);

  return (
    <Link to={`/category/${mediaType}/${movie.id}`}>
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
              // src={
              //   `${baseUrlImage}${movie.backdrop_path} ` ||
              //   `{process.env.PUBLIC_URL} + /assets/defaultimage.png`
              // }
              src={
                movie.backdrop_path
                  ? `${baseUrlImage}${movie.backdrop_path}`
                  : `${process.env.PUBLIC_URL}/assets/defaultimage.png`
              }
              alt={movie.title || movie.name}
            />
          </SwiperSlide>
        )}
      </div>
    </Link>
  );
};

export default Card;
