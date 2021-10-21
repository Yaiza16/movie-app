import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'swiper/swiper.scss';
import './Slider.scss';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContentLoader, { Facebook } from 'react-content-loader';
import useNearScreen from '../hooks/useNearScreen';
import { IconArrowLeft, IconArrowRight } from '../helpers/Icons';
import Card from './Card';
// import LoadingPlaceholder from './Loading/LoadingPlaceholder';

const MyLoader = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

const MyFacebookLoader = () => <Facebook />;

const Slider = ({ title, fetchUrl, main, media }) => {
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
            <Card movie={movie} key={movie.id} main={main} media={media} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function LazySlider({ title, fetchUrl, main, media }) {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef} className="section-slider-wrapper">
      {isNearScreen ? (
        <div>
          <Slider title={title} fetchUrl={fetchUrl} main={main} media={media} />
          {/* <LoadingPlaceholder /> */}
        </div>
      ) : (
        <>
          <MyLoader />
          <MyFacebookLoader />
        </>
      )}
    </div>
  );
}
