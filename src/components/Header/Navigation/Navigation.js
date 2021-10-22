import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ isNavMobileOpened, setIsNavMobileOpened }) => {
  return (
    <ul className={isNavMobileOpened ? 'nav nav--active' : 'nav'}>
      <li className="nav__item">
        <NavLink
          to="/movies"
          className="nav__link"
          activeClassName="nav__link--active"
          onClick={() => setIsNavMobileOpened(false)}
        >
          Movies
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to="/series"
          className="nav__link"
          activeClassName="nav__link--active"
          onClick={() => setIsNavMobileOpened(false)}
        >
          Series
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
