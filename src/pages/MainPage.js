import React from 'react';
import Hero from '../components/Hero/Hero';
import Slider from '../components/Slider';
import requests from '../helpers/requests';

const MainPage = () => {
  return (
    <div>
      <Hero />
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
