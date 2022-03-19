import React from 'react';
import PersonalDataItem from './PersonalDataItem';
import './PersonalData.scss';

const PersonalData = ({ person }) => {
  return (
    <div className="personal-data-container">
      <h2 className="personal-data-name">{person.name}</h2>
      <div className="personal-data-items-container">
        <PersonalDataItem title="Date of birth: " info={person.birthday} />
        {person.deathday !== null ? (
          <PersonalDataItem title="Date of birth: " info={person.deathday} />
        ) : null}
        {person?.place_of_birth?.length === 0 ||
        person?.place_of_birth === null ? null : (
          <PersonalDataItem
            title="Place of birth: "
            info={person.place_of_birth}
          />
        )}
        {person?.biography?.length === 0 ||
        person?.biography === null ? null : (
          <PersonalDataItem title="Biography: " info={person.biography} />
        )}
      </div>
    </div>
  );
};

export default PersonalData;
