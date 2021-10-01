import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Card from './Card';
import './Slider.scss';

const Slider = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  SwiperCore.use([Navigation]);

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
    <div className="section-slider">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{
          nextEl: '.custom_next',
          prevEl: '.custom_prev',
        }}
        spaceBetween={20}
        // loopedSlides={3}
        // slidesPerGroup={3}
        // loopFillGroupWithBlank
        className="movies-container"
      >
        <div className="custom_next" />
        <div className="custom_prev" />
        {movies.map((movie) => (
          <SwiperSlide className="swiper-slide" movie={movie} key={movie.id}>
            <Card movie={movie} key={movie.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
