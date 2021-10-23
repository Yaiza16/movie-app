// import { LoaderProvider } from 'contexts/LoaderContext';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loader from 'vendors/Loader/Loader';
// import Loader from 'vendors/Loader/Loader';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { FormProvider } from '../contexts/FormContext';
import ScrollToTop from '../hooks/ScrollToTop';
import DetailsPage from '../pages/DetailsPage';
import MoviesPage from '../pages/MoviesPage';
import PersonDetailsPage from '../pages/PersonDetailsPage';
import SearchPage from '../pages/SearchPage';
import SeriesPage from '../pages/SeriesPage';
import MainPage from '../pages/MainPage';
import './AppRouter.scss';

// const MainPage = React.lazy(() => import('pages/MainPage'));
// const Header = React.lazy(() => import('components/Header/Header'));
// const MoviesPage = React.lazy(() => import('pages/MoviesPage'));
// const DetailsPage = React.lazy(() => import('pages/DetailsPage'));

const AppRouter = () => {
  const [multiSearch, setMultiSearch] = useState('');

  return (
    <Router>
      <ScrollToTop>
        <FormProvider>
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
            {/* <Suspense fallback={<Loader />}> */}
            <Route exact path="/" component={MainPage}>
              <MainPage />
            </Route>
            {/* </Suspense> */}
          </Switch>
        </FormProvider>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default AppRouter;
