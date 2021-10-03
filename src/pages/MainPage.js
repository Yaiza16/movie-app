import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import requests from '../helpers/requests';

const MainPage = () => {
  return (
    <div>
      <Hero />
      <Slider title="Trending now" fetchUrl={requests.fetchTrendies} main />
      <Slider
        title="Top Rated Movies"
        fetchUrl={requests.fetchMoviesTopRated}
        main={false}
      />
      <Slider
        title="Top Rated Series"
        fetchUrl={requests.fetchSeriesTopRated}
        main={false}
      />
    </div>
  );
};

export default MainPage;
