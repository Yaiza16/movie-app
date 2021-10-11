import React from 'react';
import './GenreButton.scss';

const GenreButton = ({ text }) => {
  return (
    <div className="genre-button">
      <p className="genre-button-text">{text}</p>
    </div>
  );
};

export default GenreButton;
