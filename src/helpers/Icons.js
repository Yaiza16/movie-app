import React from 'react';
import { IconContext } from 'react-icons';
import { BiCameraMovie, BiSearch, BiX } from 'react-icons/bi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CgDetailsMore } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';
import { RiMovieLine } from 'react-icons/ri';

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

export const IconDetails = () => (
  <IconContext.Provider value={{ size: '25px', color: '#1a1a1a' }}>
    <CgDetailsMore />
  </IconContext.Provider>
);

export const IconStar = () => (
  <IconContext.Provider value={{ size: '20px', color: '#f06c65' }}>
    <AiFillStar />
  </IconContext.Provider>
);

export const IconRun = () => (
  <IconContext.Provider value={{ size: '20px', color: '#1a1a1a' }}>
    <RiMovieLine />
  </IconContext.Provider>
);

export default IconMovie;
