import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import './Slider.scss';

const Slider = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function catchMovies() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    catchMovies();
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
      <Swiper className="movies-container">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
