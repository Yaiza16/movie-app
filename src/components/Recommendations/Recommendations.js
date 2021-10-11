import React from 'react';
import Card from '../Card';
import './Recommendations.scss';

const Recommendations = ({ title, recommendation }) => {
  return recommendation.length !== 0 ? (
    <div className="recommendations-container">
      <p className="recommendations-title">{title}</p>
      <div className="recommendations-card-container">
        {recommendation.map((rec) => {
          return <Card movie={rec} key={rec.id} main={false} media="movie" />;
        })}
      </div>
    </div>
  ) : null;
};

export default Recommendations;
