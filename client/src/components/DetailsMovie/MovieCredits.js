import React from 'react';
import CastSection from 'components/DetailsMovie/CastSection/CastSection';

const MovieCredits = ({ movie, type }) => {
  return (
    <div className="credits-container">
      <CastSection title="Directed by: " cast={movie.directors} />
      {type === 'movie' ? (
        <CastSection title="Screenplay by: " cast={movie.screenPlayers} />
      ) : (
        <CastSection title="Producers by: " cast={movie.producers} />
      )}
      <CastSection title="Story by: " cast={movie.writers} />
      <CastSection title="Starring: " cast={movie.cast} star />
    </div>
  );
};

export default MovieCredits;
