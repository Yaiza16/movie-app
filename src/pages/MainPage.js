import React from 'react';
import Slider from 'components/Slider/Slider';
import LazyHero from 'components/Hero/LazyHero';

import requests from '../helpers/requests';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="main-page">
      <LazyHero />
      <Slider
        title="Trending now"
        fetchUrl={requests.fetchTrendies}
        main
        media="all"
      />
      <Slider
        title="Top Rated Movies"
        fetchUrl={requests.fetchMoviesTopRated}
        main={false}
        media="movie"
      />
      <Slider
        title="Top Rated Series"
        fetchUrl={requests.fetchSeriesTopRated}
        main={false}
        media="tv"
      />
    </div>
  );
};

export default MainPage;
