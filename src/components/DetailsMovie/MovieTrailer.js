import React from 'react';
import { ButtonTV, ButtonTVDisabled } from '../Button';
import './MovieTrailer.scss';

const Trailer = ({ movie }) => {
  return (
    <div className="movie-trailer-container">
      {movie?.video?.length >= 1 ? (
        <a
          className="button-trailer-container"
          href={`https://www.youtube.com/watch?v=${movie.video[0].key}`}
          target="_blank"
          rel="noreferrer"
        >
          <ButtonTV text="Watch trailer" />
        </a>
      ) : (
        <a
          className="button-trailer-container button-trailer-container--disabled"
          href="!#"
        >
          <ButtonTVDisabled text="Trailer not available" />
        </a>
      )}
    </div>
  );
};

export default Trailer;
