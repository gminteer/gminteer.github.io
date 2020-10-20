import React, { Suspense, useState, useEffect } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Background from 'components/Background';
import Fortune from 'components/Fortune';

const About = React.lazy(() => import('components/About'));
const Gallery = React.lazy(() => import('components/Gallery'));
const Contact = React.lazy(() => import('components/Contact'));
const Resume = React.lazy(() => import('components/Resume'));

const ContentComponents = {
  ROOT: <Fortune />,
  about: <About />,
  projects: <Gallery />,
  contact: <Contact />,
  resume: <Resume />,
};

export default function App() {
  const tabs = Object.keys(ContentComponents);
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const props = { tabs, currentTab, setCurrentTab };
  useEffect(() => {
    document.title =
      currentTab === 'ROOT' ? '~gminteer/' : `~gminteer/${currentTab}`;
  }, [currentTab]);

  return (
    <>
      <Background />
      <Header {...props} />
      <Suspense fallback={<div>Loading...</div>}>
        {ContentComponents[currentTab]}
      </Suspense>
      <Footer />
    </>
  );
}
