import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'swiper/swiper.scss';
import './Slider.scss';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconArrowLeft, IconArrowRight } from 'helpers/Icons';
import Card from 'components/Card/Card';

const SliderLazy = ({ title, fetchUrl, main, media }) => {
  const [movies, setMovies] = useState([]);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    async function catchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    catchMovies();
  }, [fetchUrl]);

  return (
    <div className="section-slider-wrapper">
      <div className="section-slider">
        <h2 className="title-slider">{title}</h2>
        <Swiper
          slidesPerView="auto"
          slidesPerGroup={1}
          speed={600}
          breakpoints={{
            // when window width is >= 320px
            500: {
              slidesPerGroup: 2,
            },
            750: {
              slidesPerGroup: 3,
            },
            950: {
              slidesPerGroup: 4,
            },
            1130: {
              slidesPerGroup: 5,
            },
            1350: {
              slidesPerGroup: 6,
            },
          }}
          navigation={{
            nextEl: '.arrow-slider--right',
            prevEl: '.arrow-slider--left',
            disabledClass: 'arrow-slider--disabled',
          }}
          spaceBetween={15}
          className="movies-container"
        >
          <div className="arrow-slider arrow-slider--right" role="button">
            <IconArrowLeft className="arrow-icon" />
          </div>
          <div className="arrow-slider arrow-slider--left" role="button">
            <IconArrowRight className="arrow-icon" />
          </div>
          {movies.map((movie) => (
            <SwiperSlide
              className={
                main ? `swiper-slide` : `swiper-slide swiper-slide--back`
              }
              movie={movie}
              key={movie.id}
            >
              <Card movie={movie} key={movie.id} main={main} media={media} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderLazy;
