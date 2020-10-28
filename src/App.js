import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Background from 'components/Background';
import Fortune from 'components/Fortune';

const Pages = {
  about: React.lazy(() => import('components/About')),
  projects: React.lazy(() => import('components/Gallery')),
  contact: React.lazy(() => import('components/Contact')),
  resume: React.lazy(() => import('components/Resume')),
};

export default function App() {
  return (
    <Router>
      <Background />
      <Header pages={Object.keys(Pages)} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Fortune />
          </Route>
          {Object.entries(Pages).map(([path, Page]) => (
            <Route key={path} exact path={`/${path}`}>
              <Page />
            </Route>
          ))}
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}
