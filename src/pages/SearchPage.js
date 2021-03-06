import React, { useEffect, useState } from 'react';
import Card from 'components/Card/Card';
import { axiosRequestMulti } from 'helpers/axios/axiosRequest';
import './SearchPage.scss';

const SearchPage = ({ multiSearch }) => {
  const [cards, setCards] = useState([]);
  const [errorMsg, setErrorMsg] = useState('Typing your search');
  const filterByPerson = (data) => {
    const arrayNotPersons = Object.values(data).filter(
      (item) => item.media_type !== 'person'
    );
    return arrayNotPersons;
  };

  useEffect(() => {
    if (multiSearch.length > 2) {
      const getNewSearch = async (query) => {
        const newSearch = await axiosRequestMulti(query);
        const { results } = newSearch;
        const filterResults = filterByPerson(results);
        if (filterResults.length > 12) {
          const shorNewData = filterResults.slice(0, 12);
          setCards(shorNewData);
        }
        setCards(filterResults);
        if (cards.length === 0) {
          setErrorMsg('Not data found');
        }
      };
      getNewSearch(multiSearch);
    } else {
      setCards([]);
      setErrorMsg('Typing your search');
    }
  }, [multiSearch]);

  return (
    <div className="search-page-container">
      {cards.length === 0 ? (
        <div className="error-msg-search-container">
          <p className="error-msg-search">{errorMsg}</p>
        </div>
      ) : null}

      <div className="search-cards-container">
        {cards.map((item) => (
          <Card movie={item} main={false} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
