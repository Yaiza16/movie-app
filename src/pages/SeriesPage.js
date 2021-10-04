import React from 'react';
import Slider from '../components/Slider';
import requests from '../helpers/requests';

const SeriesPage = () => {
  return (
    <div className="movies-page-container">
      <Slider
        title="Crime Series"
        fetchUrl={requests.fetchSeriesCrime}
        main={false}
      />
      <Slider
        title="Animation Series"
        fetchUrl={requests.fetchSeriesAnimation}
        main={false}
      />
      <Slider
        title="Drama Series"
        fetchUrl={requests.fetchSeriesDrama}
        main={false}
      />
      <Slider
        title="Comedy Series"
        fetchUrl={requests.fetchSeriesComedy}
        main={false}
      />
      <Slider
        title="Reality TV Shows"
        fetchUrl={requests.fetchSeriesReality}
        main={false}
      />
      <Slider
        title="Action & Adventure Series"
        fetchUrl={requests.fetchSeriesAction}
        main={false}
      />
      <Slider
        title="Kids Series"
        fetchUrl={requests.fetchSeriesKids}
        main={false}
      />
      <Slider
        title="Mistery Series"
        fetchUrl={requests.fetchSeriesMistery}
        main={false}
      />
    </div>
  );
};

export default SeriesPage;
