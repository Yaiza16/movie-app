import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrlImage = 'https://image.tmdb.org/t/p/original';

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
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
    catchMovie();
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
          <p className="genres-movie">
            {movie.genres && movie.genres.map((genre) => `${genre.name}, `)}
          </p>

          <p className="overview-movie">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
