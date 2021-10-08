import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="details-page-container">
      <div className="details-page">
        <div className="details-page__poster-container">
          <img src="" alt="" className="details-page__poster" />
        </div>
        <div className="details-page__inf">
          <h2 className="title-movie">Hola</h2>
          <p className="genres-movie">Genre: </p>
          <p className="overview-movie">Overview here</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
