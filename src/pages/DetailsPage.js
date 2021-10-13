import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetailsPage.scss';
// import Card from '../components/Card';
import { ButtonTV, ButtonTVDisabled } from '../components/Button';
import { IconStar } from '../helpers/Icons';
import GenreButton from '../components/GenreButton';
import CastSection from '../components/CastSection/CastSection';
import Recommendations from '../components/Recommendations/Recommendations';
import MovieHeader from '../components/DetailsMovie/MovieHeader';

const baseUrlImage = 'https://image.tmdb.org/t/p/original';

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [video, setVideo] = useState([]);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);
  const [screenPlayers, setScreenPlayers] = useState([]);
  const [story, setStory] = useState([]);
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    function getDuration(time) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      return `${hours}h ${minutes}min`;
    }
    async function catchMovie() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9650301cf84b0f134776248aa6863452`
      );
      setMovie(request.data);
      const newYear = new Date(request.data.release_date);
      setYear(newYear.getFullYear());
      setDuration(getDuration(request.data.runtime));
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

    async function catchVideo() {
      const requestVideo = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9650301cf84b0f134776248aa6863452&language=en-US`
      );
      if (requestVideo) {
        setVideo(requestVideo.data.results[0]);
      } else {
        setVideo([]);
      }
    }

    async function catchCastAndDirector() {
      const requestCast = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9650301cf84b0f134776248aa6863452&language=en-US`
      );
      if (requestCast.data.cast.length >= 11) {
        setCast(requestCast.data.cast.slice(0, 11));
      } else {
        setCast(requestCast.data.cast);
      }

      const directorMovie = requestCast.data.crew.filter(
        (person) => person.job === 'Director'
      );
      setDirector(directorMovie);

      const screenPlayersMovie = requestCast.data.crew.filter(
        (person) => person.job === 'Screenplay'
      );
      setScreenPlayers(screenPlayersMovie);

      const storyMovie = requestCast.data.crew.filter(
        (person) => person.job === 'Story'
      );
      setStory(storyMovie);
    }

    catchMovie();
    catchRecommendation();
    catchVideo();
    catchCastAndDirector();
  }, [id]);

  return (
    <div className="details-page-container">
      <div className="details-page">
        <div className="details-page__poster-container">
          <img
            src={`${baseUrlImage}${movie.poster_path}`}
            alt={movie.name || movie.title}
            className="details-page__poster"
          />
        </div>
        <div className="details-page__inf">
          <div className="details-page__inf-movie">
            <MovieHeader movie={movie} />
            <div className="movie-second-line">
              <div className="details-container">
                <div className="details-container__inf genres-movie">
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <GenreButton text={genre.name} />
                    ))}
                </div>
              </div>
              <div className="movie-more-details-container">
                <p className="movie-duration">{duration}</p>
              </div>
            </div>

            <p className="overview-movie">{movie.overview}</p>
            <CastSection title="Directed by: " cast={director} />
            <CastSection title="Screenplay by: " cast={screenPlayers} />
            <CastSection title="Story by: " cast={story} />
            <CastSection title="Starring: " cast={cast} />
            <div className="button-trailer-container">
              {video?.key ? (
                <a
                  className="movie-trailer-container"
                  href={`https://www.youtube.com/watch?v=${video.key}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ButtonTV text="Watch trailer" />
                </a>
              ) : (
                <a
                  className="movie-trailer-container movie-trailer-container--disabled"
                  href="!#"
                >
                  <ButtonTVDisabled text="Trailer not available" />
                </a>
              )}
            </div>
          </div>
          <Recommendations
            title="Recommendations: "
            recommendation={recommendation}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
