import React from 'react';
import CastItem from './CastItem';
import './CastSection.scss';

const CastSection = ({ title, cast, star }) => {
  return cast && cast.length !== 0 ? (
    <div className="cast-container">
      <p className="cast-title">{title}</p>
      <div className="cast-item">
        {cast.map((person, i, arr) => {
          if (arr.length - 1 === i) {
            return star ? (
              <CastItem key={person.id} person={person} last />
            ) : (
              ` ${person.name}`
            );
          }
          return star ? (
            <CastItem key={person.id} person={person} last={false} />
          ) : (
            ` ${person.name},`
          );
        })}
      </div>
    </div>
  ) : null;
};

export default CastSection;
