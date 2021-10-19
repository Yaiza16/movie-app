import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconMovie from '../helpers/Icons';
import Form from './Form';
import './Header.scss';

const Header = ({ multiSearch, setMultiSearch }) => {
  const [header, setHeader] = useState(false);

  const headerFixed = () => {
    if (window.scrollY > 1) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', headerFixed);
  return (
    <header className={header ? 'header header--background' : 'header'}>
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
      <Form setMultiSearch={(multiSearch, setMultiSearch)} />
    </header>
  );
};

export default Header;
