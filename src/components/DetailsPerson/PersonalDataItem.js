import React from 'react';
import './PersonalDataItem.scss';

const PersonalDataItem = ({ info, title }) => {
  return (
    <div className="personal-data-item">
      <p className="personal-data-title">{title}</p>
      <p className="personal-data-info">{info}</p>
    </div>
  );
};

export default PersonalDataItem;
