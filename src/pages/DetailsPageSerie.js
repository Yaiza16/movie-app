import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTv from '../hooks/useTv';

const DetailsPageSerie = () => {
  const { id } = useParams();
  const [tv, setTv] = useState([]);
  const { getNewTv } = useTv();

  useEffect(() => {
    const getInformation = async () => {
      const data = await getNewTv(id, 'tv');
      setTv(data);
    };
    getInformation();
  }, [id]);
  return (
    <div className="class">
      <h1>Hola</h1> {console.log(tv)}
    </div>
  );
};

export default DetailsPageSerie;
