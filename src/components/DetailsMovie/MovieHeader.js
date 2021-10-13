import React from 'react';
import { IconStar } from '../../helpers/Icons';
import GenreButton from '../GenreButton';
import './MovieHeader.scss';

const MovieHeader = ({ movie }) => {
  return (
    <div className="movie-header-container">
      <div className="movie-header-section">
        <h2 className="title-movie">{movie.name}</h2>
        <p className="movie-year">{movie.year}</p>
        <div className="movie-average-container">
          <IconStar />
          <p className="movie-average">{movie.vote_average}</p>
        </div>
      </div>

      <div className="movie-header-section movie-header-section--second">
        <div className="movie-genres-container">
          {movie.genres &&
            movie.genres.map((genre) => <GenreButton text={genre.name} />)}
        </div>
        {/* <div className="movie-duration-container"> */}
        <p className="movie-duration">{movie.duration}</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MovieHeader;
