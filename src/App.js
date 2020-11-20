import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Background from 'components/Background';
import PagePicker, { pages } from 'pages';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Background />
      <Header pages={Object.keys(pages)} />
      <PagePicker />
      <Footer />
    </Router>
  );
}
