import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="text-gray-900">
      {/* Header Section */}
      <header className="bg-black text-white font-roboto py-8 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto relative">
          {/* Header Title */}
          <div className="text-center w-full">
            <h1 className="text-2xl lg:text-4xl font-normal leading-tight lg:leading-loose">
              <span className="block lg:inline lg:mr-2">LAKODA</span>
              <span className="block lg:inline lg:mr-2">"STINKY"</span>
              <span className="block lg:inline lg:mr-2">GARRISON</span>
            </h1>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end md:hidden pr-4">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-10 h-10 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Full Navigation Links for Desktop */}
          <nav className="hidden md:flex justify-center mt-6 space-x-6 text-lg font-thin">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#key-facts" className="hover:underline">Key Facts</a>
            <a href="#athletics" className="hover:underline">Athletics</a>
            <a href="#highlights" className="hover:underline">Highlights</a>
            <a href="#other-videos" className="hover:underline">Other Videos</a>
            <a href="#photos" className="hover:underline">Photos</a>
            <a href="#academics" className="hover:underline">Academics</a>
            <a href="#leadership" className="hover:underline">Leadership</a>
            <a href="#community" className="hover:underline">Community</a>
            <a href="#inspiration" className="hover:underline">Inspiration</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden flex flex-col items-center bg-black text-white py-4 space-y-4"
          >
            <a href="#home" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#key-facts" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Key Facts</a>
            <a href="#athletics" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Athletics</a>
            <a href="#highlights" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Highlights</a>
            <a href="#other-videos" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Other Videos</a>
            <a href="#photos" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Photos</a>
            <a href="#academics" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Academics</a>
            <a href="#leadership" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Leadership</a>
            <a href="#community" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Community</a>
            <a href="#inspiration" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Inspiration</a>
            <a href="#contact" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

      {/* Adding margin-top equivalent to the header height */}
      <main className="mt-40 font-sans">
        {/* Highlight Video Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Highlight Video</h2>
            <div className="mt-8">
              <iframe
                className="mx-auto"
                width="80%"
                height="450"
                src="https://www.youtube.com/embed/placeholder"
                title="Highlight Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-6 text-lg max-w-3xl mx-auto">
              I am a passionate and dedicated student-athlete with a strong commitment to both academics and sports.
              My goal is to compete at the collegiate level while pursuing a degree in [intended major]. I have been
              a member of the [team name] for [number of years] and have consistently been recognized for my leadership
              and performance on the field.
            </p>
          </div>
        </section>

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

        {/* Photos Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {/* Placeholder images */}
              <img
                src="https://via.placeholder.com/300x200"
                alt="Placeholder 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Placeholder 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src="https://via.placeholder.com/300x200"
                alt="Placeholder 3"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="mt-6 text-lg max-w-3xl mx-auto">
              For inquiries, recruitment information, or more details about my athletic journey, feel free to reach out!
            </p>
            <div className="mt-8">
              <a
                href="mailto:john.doe@example.com"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-500 transition"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
