import React from 'react';
import CastItem from './CastItem';
import './CastSection.scss';

const CastSection = ({ title, cast, star }) => {
  return cast && cast.length !== 0 ? (
    <div className="cast-container">
      <p className="cast-title">{title}</p>
      <p className="cast-item">
        {cast.map((person, i, arr) => {
          if (arr.length - 1 === i) {
            return star ? <CastItem person={person} last /> : ` ${person.name}`;
          }
          return star ? (
            <CastItem person={person} last={false} />
          ) : (
            ` ${person.name},`
          );
        })}
      </p>
    </div>
  ) : null;
};

export default CastSection;
