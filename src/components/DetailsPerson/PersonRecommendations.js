import React from 'react';
import Card from '../Card';

const PersonRecommendations = ({ recommendations }) => {
  return recommendations?.length !== 0 ? (
    <div className="recommendations-container">
      <p className="recommendations-title">Recommendations: </p>
      <div className="recommendations-card-container">
        {recommendations?.map((rec, i) => {
          if (i < 6) {
            return <Card movie={rec} key={rec.id} main={false} />;
          }
          return null;
        })}
      </div>
    </div>
  ) : null;
};

export default PersonRecommendations;
