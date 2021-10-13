import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../hooks/ScrollToTop';
// import DetailsPage1 from '../pages/DetailsPage1';
import DetailsPage3 from '../pages/DetailsPage3';
// import DetailsPage from '../pages/DetailsPage';
import MainPage from '../pages/MainPage';
import MoviesPage from '../pages/MoviesPage';
import SeriesPage from '../pages/SeriesPage';

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener('load', handleLoading);
    return () => window.removeEventListener('load', handleLoading);
  }, []);
  return (
    <Router>
      <ScrollToTop>
        <Header />
        {isLoading ? (
          <h1>Hola</h1>
        ) : (
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
            <Route exact path="/category/movie/:id">
              <DetailsPage3 />
            </Route>
            <Route exact path="/serie/:id">
              <h1>Hola</h1>
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        )}
      </ScrollToTop>
    </Router>
  );
};

export default AppRouter;
