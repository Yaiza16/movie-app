import React from 'react';
import CastSection from './CastSection/CastSection';

const MovieCredits = ({ movie }) => {
  return (
    <div className="credits-container">
      <CastSection title="Directed by: " cast={movie.director} />
      <CastSection title="Screenplay by: " cast={movie.screenPlayers} />
      <CastSection title="Story by: " cast={movie.writers} />
      <CastSection title="Starring: " cast={movie.cast} />
    </div>
  );
};

export default MovieCredits;
