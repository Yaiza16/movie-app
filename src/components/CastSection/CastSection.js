import React from 'react';
import './CastSection.scss';

const CastSection = ({ title, cast }) => {
  return cast.length !== 0 ? (
    <div className="cast-container">
      <p className="cast-title">{title}</p>
      <p className="cast-item">
        {cast.map((person, i, arr) => {
          if (arr.length - 1 === i) {
            return ` ${person.name}`;
          }
          return ` ${person.name},`;
        })}
      </p>
    </div>
  ) : null;
};

export default CastSection;
