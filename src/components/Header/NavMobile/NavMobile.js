import React from 'react';
import './NavMobile.scss';

const NavMobile = ({ setIsNavMobileOpened }) => {
  const handleNavMobile = () => {
    setIsNavMobileOpened((value) => !value);
  };

  return (
    <div
      className="burger"
      role="button"
      onClick={() => handleNavMobile()}
      aria-hidden="true"
    >
      <div className="burger__line" />
      <div className="burger__line" />
      <div className="burger__line" />
    </div>
  );
};

export default NavMobile;
