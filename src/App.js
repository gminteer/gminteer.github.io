import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Background from 'components/Background';
import PagePicker from 'pages';

const Pages = {
  about: React.lazy(() => import('pages/About')),
  projects: React.lazy(() => import('pages/Gallery')),
  contact: React.lazy(() => import('pages/Contact')),
  resume: React.lazy(() => import('pages/Resume')),
};

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Background />
      <Header pages={Object.keys(Pages)} />
      <PagePicker />
      <Footer />
    </Router>
  );
}
