import React, { Suspense } from 'react';
import Loader from 'vendors/Loader/Loader';
import './LazyHero.scss';

const Hero = React.lazy(() => import('./Hero'));

const LazyHero = () => {
  return (
    <div className="lazy-hero-container">
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
    </div>
  );
};

export default LazyHero;
