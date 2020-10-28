import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Background from 'components/Background';
import Fortune from 'pages/Fortune';
import ErrorPage from 'pages/ErrorPage';

const Pages = {
  about: React.lazy(() => import('pages/About')),
  projects: React.lazy(() => import('pages/Gallery')),
  contact: React.lazy(() => import('pages/Contact')),
  resume: React.lazy(() => import('pages/Resume')),
};

export default function App() {
  return (
    <Router>
      <Background />
      <Header pages={Object.keys(Pages)} />
      <Suspense fallback={<ErrorPage message="Now loading..." />}>
        <Switch>
          <Route exact path="/">
            <Fortune />
          </Route>
          {Object.entries(Pages).map(([path, Page]) => (
            <Route key={path} exact path={`/${path}`}>
              <Page />
            </Route>
          ))}
          <Route fallback>
            <ErrorPage message="Page not found." />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}
