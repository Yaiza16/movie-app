import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import IconMovie from '../../helpers/Icons';
// import Form from './Form/Form';
import Form1 from './Form/Form1';
import './Header.scss';
import NavMobile from './NavMobile/NavMobile';
import Navigation from './Navigation/Navigation';
import FormContext from '../../contexts/FormContext';

const Header = ({ setMultiSearch }) => {
  const [header, setHeader] = useState(false);
  const [isNavMobileOpened, setIsNavMobileOpened] = useState(false);
  // const [expandedForm, setExpandedForm] = useState(false);
  const { isExpandedForm, setIsExpandedForm } = useContext(FormContext);

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
        onClick={() => setIsExpandedForm(false)}
      >
        <div className="logo">
          <IconMovie />
          <h1 className="logo__name-site">Tuumex</h1>
        </div>
      </NavLink>
      {isExpandedForm ? null : (
        <Navigation
          isNavMobileOpened={isNavMobileOpened}
          setIsNavMobileOpened={setIsNavMobileOpened}
        />
      )}
      <Form1 setMultiSearch={setMultiSearch} />
      <NavMobile
        isNavMobileOpened={isNavMobileOpened}
        setIsNavMobileOpened={setIsNavMobileOpened}
      />
    </header>
  );
};

export default Header;
