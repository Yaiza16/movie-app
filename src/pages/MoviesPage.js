import React from 'react';
import Slider from '../components/Slider';
import requests from '../helpers/requests';
import './MoviesPage.scss';

const MoviesPage = () => {
  return (
    <div className="movies-page-container">
      <Slider
        title="Action Movies"
        fetchUrl={requests.fetchMoviesAction}
        main={false}
        media="movie"
      />
      <Slider
        title="Romance Movies"
        fetchUrl={requests.fetchMoviesRomance}
        main={false}
        media="movie"
      />
      <Slider
        title="Fantasy Movies"
        fetchUrl={requests.fetchMoviesFantasy}
        main={false}
        media="movie"
      />
      <Slider
        title="History Movies"
        fetchUrl={requests.fetchMoviesHistory}
        main={false}
        media="movie"
      />
      <Slider
        title="Horror Movies"
        fetchUrl={requests.fetchMoviesHorror}
        main={false}
        media="movie"
      />
      <Slider
        title="Drama Movies"
        fetchUrl={requests.fetchMoviesDrama}
        main={false}
        media="movie"
      />
      <Slider
        title="Science Fiction Movies"
        fetchUrl={requests.fetchMoviesScienceFiction}
        main={false}
        media="movie"
      />
    </div>
  );
};

export default MoviesPage;
