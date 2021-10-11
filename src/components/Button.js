import React from 'react';
import { IconDetails, IconRun } from '../helpers/Icons';
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

export const ButtonDisabled = ({ text }) => {
  return (
    <div className="button-container">
      <div className="button button--disabled">
        <IconDetails />
        <p className="button__text">{text}</p>
      </div>
    </div>
  );
};

export const ButtonTV = ({ text }) => {
  return (
    <div className="button-container button-container--TV">
      <div className="button button">
        <IconRun />
        <p className="button__text">{text}</p>
      </div>
    </div>
  );
};

export const ButtonTVDisabled = ({ text }) => {
  return (
    <div className="button-container">
      <div className="button button--disabled">
        <IconRun />
        <p className="button__text">{text}</p>
      </div>
    </div>
  );
};

export default Button;
