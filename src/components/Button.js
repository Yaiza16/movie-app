import React from 'react';
import { IconDetails } from '../helpers/Icons';
import './Button.scss';

const Button = ({ text }) => {
  return (
    <div className="button-container">
      <div className="button">
        <IconDetails />
        <p className="button__text">{text}</p>
      </div>
    </div>
  );
};

export default Button;
