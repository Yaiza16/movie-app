import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetailsPage.scss';
import Card from '../components/Card';

const baseUrlImage = 'https://image.tmdb.org/t/p/original';

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  console.log(id);

  useEffect(() => {
    async function catchMovie() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9650301cf84b0f134776248aa6863452`
      );
      console.log(request);
      console.log(request.data.genres[0].name);
      console.log(request.data.genres);
      setMovie(request.data);

      return request;
    }
    async function catchRecommendation() {
      const requestRecommendation = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=9650301cf84b0f134776248aa6863452&language=en-US&page=1`
      );
      if (requestRecommendation.data.results.length >= 4) {
        setRecommendation(requestRecommendation.data.results.slice(0, 4));
      } else {
        setRecommendation(requestRecommendation.data.results);
      }
      return requestRecommendation;
    }
    catchMovie();
    catchRecommendation();
  }, [id]);

  return (
    <div className="details-page-container">
      <div className="details-page">
        <div className="details-page__poster-container">
          <img
            src={`${baseUrlImage}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="details-page__poster"
          />
        </div>
        <div className="details-page__inf">
          <h2 className="title-movie">{movie.title}</h2>
          <div className="details-container">
            <p className="details-container__title">Genre: </p>
            <p className="details-container__inf genres-movie">
              {movie.genres &&
                movie.genres.map((genre, i, arr) => {
                  if (arr.length - 1 === i) {
                    return `${genre.name} `;
                  }
                  return `${genre.name}, `;
                })}
            </p>
          </div>

          <p className="overview-movie">{movie.overview}</p>
          <div className="recommendations">
            <p className="recommendations-title">Recommendations: </p>
            <div className="recommendations-cards-container">
              {recommendation.map((rec) => {
                return <Card movie={rec} key={rec.id} main={false} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
