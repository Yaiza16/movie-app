import React from 'react';
import { Link } from 'react-router-dom';
import './CastItem.scss';

const CastItem = ({ person, last }) => {
  return (
    <Link to={`/person/${person.id}`} className="person-link">
      {last ? (
        <p className="person-name">{` ${person.name}`}</p>
      ) : (
        <p className="person-name">{` ${person.name},`}</p>
      )}{' '}
    </Link>
  );
};

export default CastItem;
