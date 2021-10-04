import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../pages/MainPage';
import MoviesPage from '../pages/MoviesPage';
import SeriesPage from '../pages/SeriesPage';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <h1>Search</h1>
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/series">
          <SeriesPage />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
