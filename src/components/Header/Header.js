import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconMovie from '../../helpers/Icons';
// import Form from './Form/Form';
import Form1 from './Form/Form1';
import './Header.scss';
import NavMobile from './NavMobile/NavMobile';
import Navigation from './Navigation/Navigation';

const Header = ({ setMultiSearch }) => {
  const [header, setHeader] = useState(false);
  const [isNavMobileOpened, setIsNavMobileOpened] = useState(false);
  const [expandedForm, setExpandedForm] = useState(false);

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
      <NavLink
        to="/"
        className="nav-link-logo"
        onClick={() => setExpandedForm(false)}
      >
        <div className="logo">
          <IconMovie />
          <h1 className="logo__name-site">Tuumex</h1>
        </div>
      </NavLink>
      {expandedForm ? null : (
        <Navigation
          isNavMobileOpened={isNavMobileOpened}
          setIsNavMobileOpened={setIsNavMobileOpened}
        />
      )}
      <Form1
        setMultiSearch={setMultiSearch}
        expandedForm={expandedForm}
        setExpandedForm={setExpandedForm}
      />
      <NavMobile
        isNavMobileOpened={isNavMobileOpened}
        setIsNavMobileOpened={setIsNavMobileOpened}
      />
    </header>
  );
};

export default Header;
