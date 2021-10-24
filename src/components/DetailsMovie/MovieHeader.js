import React from 'react';
import { IconStar } from 'helpers/Icons';
import GenreItem from './GenreItem';
import './MovieHeader.scss';

const MovieHeader = ({ movie, type }) => {
  return (
    <div className="movie-header-container">
      <div className="movie-header-section">
        <h2 className="title-movie">{movie.name}</h2>
        <div className="movie-header-section__part-two">
          <p className="movie-year">{movie.year}</p>
          <div className="movie-average-container">
            <IconStar />
            <p className="movie-average">{movie.vote_average}</p>
          </div>
        </div>
      </div>

      <div className="movie-header-section movie-header-section--second">
        <div className="movie-genres-container">
          {movie.genres &&
            movie.genres.map((genre) => (
              <GenreItem text={genre.name} key={genre.name} />
            ))}
        </div>
        {/* <div className="movie-duration-container"> */}
        {type === 'movie' ? (
          <p className="movie-duration">{movie.duration}</p>
        ) : (
          <p className="movie-duration">{`${movie.seasons} seasons`}</p>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default MovieHeader;
