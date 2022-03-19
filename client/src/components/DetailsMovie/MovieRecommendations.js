import React from 'react';
import Card from 'components/Card/Card';
import './MovieRecommendations.scss';

const MovieRecommendations = ({ recommendations }) => {
  return recommendations?.length !== 0 ? (
    <div className="recommendations-container">
      <p className="recommendations-title">Recommendations: </p>
      <div className="recommendations-card-container">
        {recommendations?.map((rec, i) => {
          if (i < 4) {
            return <Card movie={rec} key={rec.id} main={false} media="movie" />;
          }
          return null;
        })}
      </div>
    </div>
  ) : null;
};

export default MovieRecommendations;
