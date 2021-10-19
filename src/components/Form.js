import React, { useState, useEffect, useRef } from 'react';
import './Form.scss';
import { useHistory } from 'react-router-dom';
import { IconClose, IconSearch } from '../helpers/Icons';

const Form = ({ multiSearch, setMultiSearch }) => {
  const [expandedForm, setExpandedForm] = useState(false);
  const history = useHistory();
  // const [search, setSearch] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (expandedForm) {
      history.push('/search');
      console.log(multiSearch);
    } else {
      history.push('/');
    }
  }, [expandedForm, history]);

  const handleForm = () => {
    setExpandedForm((value) => !value);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    // setSearch(e.target.value);
    // console.log(search);
    console.log(inputRef.current.value.length);
    setMultiSearch(e.target.value);
  };

  const handleFocus = () => setExpandedForm(false);

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
          onBlur={handleFocus}
        />

        <button
          className="icon-container icon-container--search"
          type="button"
          onClick={handleForm}
        >
          <IconSearch />
        </button>

        <button
          className="icon-container icon-container--close"
          type="button"
          onClick={handleForm}
        >
          <IconClose />
        </button>
      </div>
    </form>
  );
};

export default Form;
