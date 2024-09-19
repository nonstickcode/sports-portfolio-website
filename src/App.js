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

        {/* Stats and Achievements Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Stats & Achievements</h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Goals Scored</h3>
                  <p className="mt-4 text-3xl font-bold">28</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Assists</h3>
                  <p className="mt-4 text-3xl font-bold">15</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Games Played</h3>
                  <p className="mt-4 text-3xl font-bold">50</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold">Achievements</h3>
              <ul className="list-disc mt-4 mx-auto text-lg max-w-2xl">
                <li>All-State Soccer Team 2023</li>
                <li>Captain of High School Team</li>
                <li>Player of the Year - Region 4</li>
                <li>Scholar Athlete Award</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
