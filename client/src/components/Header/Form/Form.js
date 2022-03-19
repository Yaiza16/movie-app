import React, { useEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { IconClose, IconSearch } from 'helpers/Icons';
import './Form.scss';
import FormContext from 'contexts/FormContext';

const Form = ({ setMultiSearch }) => {
  const inputRef = useRef();
  const history = useHistory();
  const { isExpandedForm, setIsExpandedForm } = useContext(FormContext);

  useEffect(() => {
    if (!isExpandedForm) {
      inputRef.current.value = '';
      setMultiSearch('');
    }
  }, [isExpandedForm, setMultiSearch]);

  const handleFormOpen = () => {
    setIsExpandedForm(true);
    inputRef.current.focus();
    history.push('/search');
  };

  const handleFormClose = () => {
    setIsExpandedForm(false);
    history.push('/');
  };

  const handleChange = (e) => {
    setMultiSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className={
            isExpandedForm
              ? `input-search input-search--opened`
              : `input-search`
          }
          ref={inputRef}
          type="text"
          id="search"
          required
          placeholder="Typing at least 3 characters..."
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

        {isExpandedForm ? (
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

export default Form;
