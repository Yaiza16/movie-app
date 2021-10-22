import React from 'react';
import './NavMobile.scss';

const NavMobile = ({ isNavMobileOpened, setIsNavMobileOpened }) => {
  const handleNavMobile = () => {
    setIsNavMobileOpened((value) => !value);
  };

  return (
    <div
      className={isNavMobileOpened ? `burger burger--closed` : `burger`}
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
