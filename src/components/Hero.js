import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../helpers/requests';

const Hero = () => {
  const [movie, getMovie] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const request = await axios.get(requests.fetchSeriesPopularity);
      const lengthRequest = request.data.results.length;
      const option = Math.floor(Math.random() * lengthRequest - 1);
      getMovie(request.data.results[option]);
      console.log(request.data.results[option]);
      //   console.log(request);
      //   console.log(lengthRequest);
      //   console.log(option);
    };
    fecthData();
  }, []);

  return (
    <div className="hero-container">
      <div className="h1">{movie.name || movie.original_name}</div>
    </div>
  );
};

export default Hero;
