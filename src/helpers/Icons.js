import React from 'react';
import { IconContext } from 'react-icons';
import { BiCameraMovie, BiSearch, BiX } from 'react-icons/bi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const IconMovie = () => (
  <IconContext.Provider value={{ size: '40px', color: '#ce2e27' }}>
    <BiCameraMovie />
  </IconContext.Provider>
);

export const IconSearch = () => (
  <IconContext.Provider value={{ size: '32px', color: '#f6f6f6' }}>
    <BiSearch />
  </IconContext.Provider>
);

export const IconClose = () => (
  <IconContext.Provider value={{ size: '32px', color: '#f6f6f6' }}>
    <BiX />
  </IconContext.Provider>
);

export const IconArrowRight = () => (
  <IconContext.Provider value={{ size: '50px', color: '#f6f6f6' }}>
    <MdKeyboardArrowLeft />
  </IconContext.Provider>
);

export const IconArrowLeft = () => (
  <IconContext.Provider value={{ size: '50px', color: '#f6f6f6' }}>
    <MdKeyboardArrowRight />
  </IconContext.Provider>
);

export default IconMovie;
