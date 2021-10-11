import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetailsPage.scss';
import Card from '../components/Card';
import Button, { ButtonDisabled } from '../components/Button';
import { IconStar } from '../helpers/Icons';
import GenreButton from '../components/GenreButton';

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
      return `${hours}h ${minutes}`;
    }

    async function catchMovie() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9650301cf84b0f134776248aa6863452`
      );
      console.log(request);
      console.log(request.data.genres[0].name);
      console.log(request.data.genres);
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
      console.log(video);
      console.log(requestVideo);
      console.log(requestVideo.data.results[0]);
      // console.log(requestVideo?.data?.results[0].key);
    }

    async function catchCastAndDirector() {
      const requestCast = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9650301cf84b0f134776248aa6863452&language=en-US`
      );
      console.log(requestCast.data.cast);
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

      console.log(directorMovie);
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
            <div className="movie-title-container">
              <h2 className="title-movie">{movie.title}</h2>
              <p className="movie-year">{year}</p>
              <p className="movie-duration">{duration}</p>

              <div className="movie-average-container">
                <IconStar />
                <p className="icon-average">{movie.vote_average}</p>
              </div>
            </div>
            <div className="details-container">
              <div className="details-container__inf genres-movie">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <GenreButton text={genre.name} />
                  ))}
              </div>
            </div>

            <p className="overview-movie">{movie.overview}</p>
            <div className="director-container">
              <p className="director-title title-section">Directed by: </p>
              <p className="director-name name-section">
                {director.map((person, i, arr) => {
                  if (arr.length - 1 === i) {
                    return ` ${person.name}`;
                  }
                  return ` ${person.name},`;
                })}
              </p>
            </div>
            {screenPlayers === [] ? (
              <div className="screenplayer-container">
                <p className="screenplayers-title title-section">
                  Screenplay by:{' '}
                </p>
                <p className="screenplayers-name name-section">
                  {screenPlayers.map((person, i, arr) => {
                    if (arr.length - 1 === i) {
                      return ` ${person.name}`;
                    }
                    return ` ${person.name},`;
                  })}
                </p>
              </div>
            ) : null}

            <div className="story-container">
              <p className="story-title title-section">Story by: </p>
              <p className="story-name name-section">
                {story.map((person, i, arr) => {
                  if (arr.length - 1 === i) {
                    return ` ${person.name}`;
                  }
                  return ` ${person.name},`;
                })}
              </p>
            </div>

            <div className="cast-container">
              <p className="cast-title title-section">Starring: </p>
              <p className="actor-name name-section">
                {cast.map((actor, i, arr) => {
                  if (arr.length - 1 === i) {
                    return ` ${actor.name}`;
                  }
                  return ` ${actor.name},`;
                })}
              </p>
            </div>
            <div className="button-trailer-container">
              {video?.key ? (
                <a
                  className="movie-trailer-container"
                  href={`https://www.youtube.com/watch?v=${video.key}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button text="Watch trailer" />
                </a>
              ) : (
                <a
                  className="movie-trailer-container movie-trailer-container--disabled"
                  href="!#"
                >
                  <ButtonDisabled text="Trailer not available" />
                </a>
              )}
            </div>
          </div>
          <div className="recommendations">
            <p className="recommendations-title">Recommendations: </p>
            <div className="recommendations-cards-container">
              {recommendation.map((rec) => {
                return (
                  <Card movie={rec} key={rec.id} main={false} media="movie" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
