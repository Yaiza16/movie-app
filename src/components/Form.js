import React, { useState, useEffect } from 'react';
import './Form.scss';
import { useHistory } from 'react-router-dom';
import { IconClose, IconSearch } from '../helpers/Icons';

const Form = ({ setMultiSearch }) => {
  const [expandedForm, setExpandedForm] = useState(false);
  const history = useHistory();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (expandedForm) {
      history.push('/search');
    } else {
      history.push('/');
    }
  }, [expandedForm, history]);

  const handleForm = () => {
    setExpandedForm((value) => !value);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
    setMultiSearch(e.target.value);
  };

  return (
    <form className="form-search">
      <div className="input-container">
        <input
          className={
            expandedForm ? `input-search input-search--opened` : `input-search`
          }
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
