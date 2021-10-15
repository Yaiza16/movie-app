import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PersonalData from '../components/DetailsPerson/PersonalData';
import PersonRecommendations from '../components/DetailsPerson/PersonRecommendations';
import ProfilePoster from '../components/DetailsPerson/ProfilePoster';
import usePerson from '../hooks/usePerson';

import './PersonPage.scss';

const PersonDetailsPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);
  const { getNewPerson } = usePerson();

  useEffect(() => {
    const getInformation = async () => {
      const data = await getNewPerson(id, 'person');
      setPerson(data);
    };
    getInformation();
  }, [id]);

  return (
    <div className="details-page-container">
      <div className="details-page details-page--person">
        <div className="details-page-main">
          <ProfilePoster person={person} />
          <PersonalData person={person} />
        </div>
        <PersonRecommendations recommendations={person.personRecommendations} />
      </div>
    </div>
  );
};

export default PersonDetailsPage;
