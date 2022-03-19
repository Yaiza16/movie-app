import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import requests from 'helpers/requests';
import './Hero.scss';
import Button from 'components/Button/Button';

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
        if (request?.data?.results[optionRandom]?.backdrop_path === undefined) {
          option = null;
        } else {
          option = request.data.results[optionRandom].backdrop_path;
        }
      } while (option === null);
      getMovie(request.data.results[optionRandom]);
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
        <h1 className="hero-inf__title">{movie.name || movie.original_name}</h1>
        <p className="hero-inf__overview">{movie.overview}</p>
        <Link to={`/category/tv/${movie.id}`} className="button-link">
          <Button text="See details" className="button" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
