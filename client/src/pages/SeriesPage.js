import React from 'react';
import Slider from 'components/Slider/Slider';
import requests from 'helpers/requests';

const SeriesPage = () => {
  return (
    <div className="movies-page-container">
      <Slider
        title="Crime Series"
        fetchUrl={requests.fetchSeriesCrime}
        main={false}
        media="tv"
      />
      <Slider
        title="Animation Series"
        fetchUrl={requests.fetchSeriesAnimation}
        main={false}
        media="tv"
      />
      <Slider
        title="Drama Series"
        fetchUrl={requests.fetchSeriesDrama}
        main={false}
        media="tv"
      />
      <Slider
        title="Comedy Series"
        fetchUrl={requests.fetchSeriesComedy}
        main={false}
        media="tv"
      />
      <Slider
        title="Reality TV Shows"
        fetchUrl={requests.fetchSeriesReality}
        main={false}
        media="tv"
      />
      <Slider
        title="Action & Adventure Series"
        fetchUrl={requests.fetchSeriesAction}
        main={false}
        media="tv"
      />
      <Slider
        title="Kids Series"
        fetchUrl={requests.fetchSeriesKids}
        main={false}
        media="tv"
      />
      <Slider
        title="Mistery Series"
        fetchUrl={requests.fetchSeriesMistery}
        main={false}
        media="tv"
      />
    </div>
  );
};

export default SeriesPage;
