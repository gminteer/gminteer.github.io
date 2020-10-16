import React, { useState } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import About from 'components/About';
import Gallery from 'components/Gallery';
import Contact from 'components/Contact';
import Resume from 'components/Resume';

const ContentComponents = {
  about: <About />,
  projects: <Gallery />,
  contact: <Contact />,
  resume: <Resume />,
};

function App() {
  const tabs = ['about', 'projects', 'contact', 'resume'];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const props = { tabs, currentTab, setCurrentTab };
  return (
    <>
      <Header {...props} />
      {ContentComponents[currentTab]}
      <Footer />
    </>
  );
}

export default App;
