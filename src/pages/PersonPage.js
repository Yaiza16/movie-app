import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfilePoster from '../components/DetailsPerson/ProfilePoster';
import usePerson from '../hooks/usePerson';

const PersonPage = () => {
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
      <div className="details-page">
        <div className="details-page-main">
          <ProfilePoster person={person} />
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
