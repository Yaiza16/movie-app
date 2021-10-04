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
      />
      <Slider
        title="Romance Movies"
        fetchUrl={requests.fetchMoviesRomance}
        main={false}
      />
      <Slider
        title="Fantasy Movies"
        fetchUrl={requests.fetchMoviesFantasy}
        main={false}
      />
      <Slider
        title="History Movies"
        fetchUrl={requests.fetchMoviesHistory}
        main={false}
      />
      <Slider
        title="Horror Movies"
        fetchUrl={requests.fetchMoviesHorror}
        main={false}
      />
      <Slider
        title="Drama Movies"
        fetchUrl={requests.fetchMoviesDrama}
        main={false}
      />
      <Slider
        title="Science Fiction Movies"
        fetchUrl={requests.fetchMoviesScienceFiction}
        main={false}
      />
    </div>
  );
};

export default MoviesPage;
