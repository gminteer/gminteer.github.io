import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Background from 'components/Background';
import Fortune from 'pages/Fortune';
import Fallback from 'pages/Fallback';

const Pages = {
  about: React.lazy(() => import('pages/About')),
  projects: React.lazy(() => import('pages/Gallery')),
  contact: React.lazy(() => import('pages/Contact')),
  resume: React.lazy(() => import('pages/Resume')),
};

export default () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Background />
    <Header pages={Object.keys(Pages)} />
    <Suspense fallback={<Fallback text="Now loading..." />}>
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
          <Fallback text="404: not found" isError />
        </Route>
      </Switch>
    </Suspense>
    <Footer />
  </Router>
);
