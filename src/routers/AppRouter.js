import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../pages/MainPage';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/search">
        <h1>Search</h1>
      </Route>
    </Router>
  );
};

export default AppRouter;
