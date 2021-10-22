import React, { useEffect, useRef } from 'react';
import './Form.scss';
import { useHistory } from 'react-router-dom';
import { IconClose, IconSearch } from '../../../helpers/Icons';
import './Form1.scss';

const Form1 = ({ expandedForm, setExpandedForm, setMultiSearch }) => {
  // const history = useHistory();
  const inputRef = useRef();
  const history = useHistory();

  useEffect(() => {
    if (expandedForm) {
      history.push('/search');
    } else {
      history.push('/');
    }
  }, [expandedForm]);

  const handleFormOpen = () => {
    setExpandedForm(true);
    console.log(expandedForm);
    inputRef.current.focus();
  };

  const handleFormClose = () => {
    setExpandedForm(false);
  };

  const handleChange = (e) => {
    console.log(inputRef.current.value.length);
    setMultiSearch(e.target.value);
  };

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

        {expandedForm ? (
          <button
            className="icon-container icon-container--close"
            type="button"
            onClick={handleFormClose}
          >
            <IconClose />
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default Form1;
