import React from 'react';
import Slider from '../components/Slider';
import requests from '../helpers/requests';

const MainPage = () => {
  return (
    <div>
      <Slider title="Trending now" fetchUrl={requests.fetchTrendies} main />
      <Slider
        title="Top Rated movies"
        fetchUrl={requests.fetchMoviesTopRated}
        main={false}
      />
    </div>
  );
};

export default MainPage;
