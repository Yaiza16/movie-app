import React from 'react';
import IconMovie from '../helpers/Icons';
import Form from './Form';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <IconMovie />
        <h1 className="logo__name-site">Tuumex</h1>
      </div>
      <ul className="nav">
        <li className="nav__item">
          <a href="!#" className="nav__link">
            Movies
          </a>
        </li>
        <li className="nav__item">
          <a href="!#" className="nav__link">
            Series
          </a>
        </li>
      </ul>
      <Form />
    </header>
  );
};

export default Header;
