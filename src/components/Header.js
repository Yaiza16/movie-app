import React from 'react';
import { NavLink } from 'react-router-dom';
import IconMovie from '../helpers/Icons';
import Form from './Form';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="nav-link-logo">
        <div className="logo">
          <IconMovie />
          <h1 className="logo__name-site">Tuumex</h1>
        </div>
      </NavLink>
      <ul className="nav">
        <li className="nav__item">
          <NavLink
            to="/movies"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Movies
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/series"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Series
          </NavLink>
        </li>
      </ul>
      <Form />
    </header>
  );
};

export default Header;
