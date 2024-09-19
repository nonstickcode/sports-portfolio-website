import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import KeyFacts from './components/KeyFacts';
import Contact from './components/Contact';
import Athletics from './components/Athletics';
import Highlights from './components/Highlights';
import OtherVideos from './components/OtherVideos';
import Photos from './components/Photos';
import Academics from './components/Academics';
import Leadership from './components/Leadership';
import Community from './components/Community';
import Character from './components/Character';
import Inspiration from './components/Inspiration';

function App() {
  useEffect(() => {
    const header = document.getElementById('site-header');
    const sections = document.querySelectorAll('section');

    const adjustScrollMargin = () => {
      const headerHeight = header.offsetHeight; // Get the current height of the header
      sections.forEach((section) => {
        section.style.scrollMarginTop = `${headerHeight}px`;
      });
    };

    adjustScrollMargin();

    // Adjust margin when the window is resized (in case header height changes)
    window.addEventListener('resize', adjustScrollMargin);

    return () => {
      window.removeEventListener('resize', adjustScrollMargin);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
        <KeyFacts />
        <Athletics />
        <Highlights />
        <OtherVideos />
        <Photos />
        <Academics />
        <Leadership />
        <Community />
        <Character />
        <Inspiration />
        <Contact />
      </main>
    </div>
  );
}

export default App;
