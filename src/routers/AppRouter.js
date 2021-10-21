import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ContentLoader, { Facebook } from 'react-content-loader';
import Header from '../components/Header';
// import LoadingPlaceholder from '../components/Loading/LoadingPlaceholder';
import ScrollToTop from '../hooks/ScrollToTop';
// import DetailsPage1 from '../pages/DetailsPage1';
import DetailsPage from '../pages/DetailsPage';
// import DetailsPageSerie from '../pages/DetailsPageSerie';
// import DetailsPage from '../pages/DetailsPage';
import MainPage from '../pages/MainPage';
import MoviesPage from '../pages/MoviesPage';
import PersonDetailsPage from '../pages/PersonDetailsPage';
import SearchPage from '../pages/SearchPage';
import SeriesPage from '../pages/SeriesPage';

const AppRouter = () => {
  const [multiSearch, setMultiSearch] = useState('');

  return (
    <Router>
      <ScrollToTop>
        <Header setMultiSearch={(multiSearch, setMultiSearch)} />
        <Switch>
          <Route path="/search">
            <SearchPage multiSearch={multiSearch} />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/series">
            <SeriesPage />
          </Route>
          <Route exact path="/category/movie/:id">
            <DetailsPage type="movie" />
          </Route>
          <Route exact path="/category/tv/:id">
            <DetailsPage type="tv" />
          </Route>
          <Route exact path="/person/:id">
            <PersonDetailsPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default AppRouter;
