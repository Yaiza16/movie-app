import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import IconMovie from 'helpers/Icons';
import FormContext from 'contexts/FormContext';
import Form from './Form/Form';
import './Header.scss';
import NavMobile from './NavMobile/NavMobile';
import Navigation from './Navigation/Navigation';

const Header = ({ setMultiSearch }) => {
  const [header, setHeader] = useState(false);
  const [isNavMobileOpened, setIsNavMobileOpened] = useState(false);
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
        <div className={isExpandedForm ? 'logo logo--disabled-mobile' : 'logo'}>
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
      <Form setMultiSearch={setMultiSearch} />
      {!isExpandedForm ? (
        <NavMobile
          isNavMobileOpened={isNavMobileOpened}
          setIsNavMobileOpened={setIsNavMobileOpened}
        />
      ) : null}
    </header>
  );
};

export default Header;
