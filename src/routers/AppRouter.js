import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../pages/MainPage';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <h1>Search</h1>
        </Route>
        <Route path="/movies">
          <h1>Movies</h1>
        </Route>
        <Route path="/series">
          <h1>Movies</h1>
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
