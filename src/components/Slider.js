import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { IconArrowLeft, IconArrowRight } from '../helpers/Icons';
import Card from './Card';
import './Slider.scss';

const Slider = ({ title, fetchUrl, main }) => {
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
      <h2 className="title-slider">{title}</h2>
      <Swiper
        slidesPerView="auto"
        // slidesPerGroup={1}
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
            <Card movie={movie} key={movie.id} main={main} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function LazySlider({ title, fetchUrl, main }) {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      console.log(el.isIntersecting);
      console.log(entries);
      if (el.isIntersecting) {
        setShow(true);
        observer.unobserve(elementRef.current);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px',
    });

    observer.observe(elementRef.current);
  });
  return (
    <div ref={elementRef} className="section-slider-wrapper">
      {show ? <Slider title={title} fetchUrl={fetchUrl} main={main} /> : null}
    </div>
  );
}
