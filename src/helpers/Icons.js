import React from 'react';
import { IconContext } from 'react-icons';
import { BiCameraMovie } from 'react-icons/bi';

const IconMovie = () => (
  <IconContext.Provider value={{ size: '40px', color: '#ce2e27' }}>
    <BiCameraMovie />
  </IconContext.Provider>
);

export default IconMovie;
