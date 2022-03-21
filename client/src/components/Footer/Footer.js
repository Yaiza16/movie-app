import React from 'react';
import { IconGithub, IconLinkedin } from 'helpers/Icons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-site">
      <div className="footer-container">
        <p className="footer-copyright">
          © 2021 Yaiza Vallejo Caro · All rights reserved
        </p>
        <div className="footer-social-container">
          <a
            href="https://github.com/Yaiza16"
            target="_blank"
            rel="external noreferrer"
          >
            <IconGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yaizavc/"
            target="_blank"
            rel="external noreferrer"
          >
            <IconLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
