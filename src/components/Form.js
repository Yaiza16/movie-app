import React, { useState } from 'react';
import './Form.scss';
import { IconSearch } from '../helpers/Icons';

const Form = () => {
  const [expandedForm, setExpandedForm] = useState(false);

  const handleForm = () => {
    setExpandedForm((value) => !value);
    // Create ref for focus input
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
        />

        <button className="icon-container" type="button" onClick={handleForm}>
          <IconSearch />
        </button>
      </div>
    </form>
  );
};

export default Form;
