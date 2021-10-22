import React, { useState, useEffect, useRef } from 'react';
// import './Form.scss';
import { useHistory } from 'react-router-dom';
import { IconClose, IconSearch } from '../../../helpers/Icons';

const Form = ({ multiSearch, setMultiSearch }) => {
  const [expandedForm, setExpandedForm] = useState(false);
  const history = useHistory();
  // const [search, setSearch] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (expandedForm) {
      history.push('/search');
      console.log(multiSearch);
      inputRef.current.focus();
    } else {
      history.push('/');
    }
  }, [expandedForm, history]);

  const handleFormOpen = () => {
    if (expandedForm === true) {
      history.push('/search');
      inputRef.current.value = '';
      setMultiSearch('');
    }

    setExpandedForm(true);
    inputRef.current.focus();
  };

  const handleFormClose = (e) => {
    history.push('/');
    e.target.classList.remove('icon-container--closeIsOpened');
    console.log('Hola');
    inputRef.current.value = '';
    setMultiSearch('');
    setExpandedForm(false);
  };

  const handleChange = (e) => {
    console.log(inputRef.current.value.length);
    setMultiSearch(e.target.value);
  };

  // const handleFocus = () => setExpandedForm(false);

  return (
    <form className="form-search">
      <div className="input-container">
        <input
          className={
            expandedForm ? `input-search input-search--opened` : `input-search`
          }
          ref={inputRef}
          type="text"
          id="search"
          required
          placeholder="Search..."
          autoComplete="off"
          onChange={handleChange}
        />

        <button
          className="icon-container icon-container--search"
          type="button"
          onClick={handleFormOpen}
        >
          <IconSearch />
        </button>

        <button
          className={
            expandedForm
              ? `icon-container icon-container--close icon-container--closeIsOpened`
              : `icon-container icon-container--close`
          }
          type="button"
          onClick={handleFormClose}
        >
          <IconClose />
        </button>
      </div>
    </form>
  );
};

export default Form;
