import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Fortune from 'pages/Fortune';
import Fallback from 'pages/Fallback';

export const pages = {
  about: React.lazy(() => import('pages/About')),
  projects: React.lazy(() => import('pages/Gallery')),
  // contact: React.lazy(() => import('pages/Contact')), TODO: either implement the form and turn back on, or just drop it...
  resume: React.lazy(() => import('pages/Resume')),
};

export default function PagePicker() {
  const location = useLocation();

  return (
    <Suspense fallback={<div />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Fortune />
          </Route>
          {Object.entries(pages).map(([path, Page]) => (
            <Route key={path} exact path={`/${path}`}>
              <Page />
            </Route>
          ))}
          <Route fallback>
            <Fallback text="404: not found" isError />
          </Route>
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
