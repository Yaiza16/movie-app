import React from 'react';

const ProfilePoster = ({ person }) => {
  return (
    <div className="profile-img-container">
      <img
        src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
        alt={person.name || person.title}
        className="profile-img"
      />
    </div>
  );
};

export default ProfilePoster;
