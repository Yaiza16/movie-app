import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../helpers/requests';
import './Hero.scss';

const baseUrlImage = 'https://image.tmdb.org/t/p/original';

const Hero = () => {
  const [movie, getMovie] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const request = await axios.get(requests.fetchSeriesPopularity);
      const lengthRequest = request.data.results.length;
      let optionRandom;
      let option;
      do {
        optionRandom = Math.floor(Math.random() * lengthRequest - 1);
        option = request.data.results[optionRandom].backdrop_path;
      } while (option === undefined);
      getMovie(request.data.results[optionRandom]);
      console.log(request.data.results[optionRandom]);
    };
    fecthData();
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-img-container">
        <img
          className="hero-img"
          src={`${baseUrlImage}${movie.backdrop_path}`}
          alt="{movie.name || movie.original_name}"
        />
      </div>
      <div className="hero-inf">
        <h1 className="hero-inf--title">{movie.name || movie.original_name}</h1>
        <p className="hero-inf--overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Hero;
