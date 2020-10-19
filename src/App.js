import React, { useState, useEffect } from 'react';

import Background from 'components/Background';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Fortune from 'components/Fortune';
import About from 'components/About';
import Gallery from 'components/Gallery';
import Contact from 'components/Contact';
import Resume from 'components/Resume';

const ContentComponents = {
  fortune: <Fortune />,
  about: <About />,
  projects: <Gallery />,
  contact: <Contact />,
  resume: <Resume />,
};

function App() {
  const tabs = Object.keys(ContentComponents);
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const props = { tabs, currentTab, setCurrentTab };
  useEffect(() => {
    document.title = `~gminteer/${currentTab}`;
  }, [currentTab]);

  return (
    <>
      <Background />
      <Header {...props} />
      {ContentComponents[currentTab]}
      <Footer />
    </>
  );
}

export default App;
