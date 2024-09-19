import React, { useEffect } from 'react';
import Header from './components/Header';

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
        {/* Home Section */}
        <section id="home" className="w-full">
          <div className="mx-auto flex flex-wrap">
            {/* Left side with text */}
            <div className="w-full md:w-1/2 bg-gray-900 px-48 py-8 flex items-center justify-center text-center">
              <div>
                <h1 className="text-5xl">LAKODA</h1>
                <h1 className="text-5xl pt-2">GARRISON</h1>
                <h3 className="text-xl mt-4">Driven Wrestler and Scholar</h3>
                <p className="mt-4">
                  My goal is to wrestle at a prestigious collegiate program
                  while pursuing my academic passions at an exceptional school.
                </p>
                <p className="mt-4">
                  I fell in love with wrestling the first time I stepped onto
                  the mat—it is an incredible sport! I am a determined,
                  well-rounded competitor who is both offensive and defensive. I
                  value input from coaches and teammates, and I work hard to
                  apply what I learn in every match. I am a team player who
                  challenges myself to improve, always striving to set a
                  positive example through leadership.
                </p>
                <p className="mt-4">
                  Despite dedicating significant time to excel in wrestling, I
                  have consistently maintained high academic performance. I
                  particularly enjoy problem-solving and thrive in challenging
                  academic environments, where I am committed to pushing myself
                  toward excellence both on the mat and in the classroom.
                </p>
              </div>
            </div>

            {/* Right side with image */}
            <div className="w-full md:w-1/2 order-first md:order-last">
              <img
                className="w-full h-auto"
                src="/lakoda-placeholder.jpeg"
                alt="Wrestler"
              />
            </div>
          </div>
        </section>

        {/* Key Facts Section */}
        <section id="key-facts">
          <div className="py-12">
            <img
              src="/Lakoda-circular.jpeg"
              alt="Lakoda Garrison"
              className="w-96 h-96 mx-auto rounded-full"
            />
          </div>
          <div className="mx-auto px-4 pt-8 pb-16 text-center">
            <h2 className="text-5xl text-blue-200">Key Facts</h2>
            <h2 className="text-2xl mt-8">About Me</h2>
            <ul className="mt-6 text-base max-w-3xl mx-auto list-disc list-inside">
              <li>2026 High School Graduation</li>
              <li>16 years old</li>
              <li>6'11" 345 lbs</li>
              <li>Position: Killer/Smasher</li>
              <li>Right Handed</li>
              <li>GPA 3.9</li>
              <li>SAT 1500</li>
              <li>NCAA Eligibility number UNKNOWN</li>
            </ul>
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

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="mt-6 text-lg max-w-3xl mx-auto">
              For inquiries, recruitment information, or more details about my
              athletic journey, feel free to reach out!
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
