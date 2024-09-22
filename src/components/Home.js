import React from 'react';

function Home() {
  return (
    <section id="home" className="w-full">
      <div className="mx-auto flex flex-wrap">
        {/* Left side with text */}
        <div className="w-full md:w-1/2 bg-gray-900 px-48 py-8 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl">LAKODA</h1>
            <h1 className="text-5xl pt-2">GARRISON</h1>
            <h3 className="text-xl mt-4">Driven Wrestler and Scholar</h3>
            <p className="mt-4">
              My goal is to wrestle at a prestigious collegiate program while
              pursuing my academic passions at an exceptional school.
            </p>
            <p className="mt-4">
              I fell in love with wrestling the first time I stepped onto the
              mat—it is an incredible sport! I am a determined, well-rounded
              competitor who is both offensive and defensive. I value input from
              coaches and teammates, and I work hard to apply what I learn in
              every match. I am a team player who challenges myself to improve,
              always striving to set a positive example through leadership.
            </p>
            <p className="mt-4">
              Despite dedicating significant time to excel in wrestling, I have
              consistently maintained high academic performance. I particularly
              enjoy problem-solving and thrive in challenging academic
              environments, where I am committed to pushing myself toward
              excellence both on the mat and in the classroom.
            </p>
          </div>
        </div>

        {/* Right side with image */}
        <div className="w-full md:w-1/2 order-first md:order-last">
          <img
            className="w-full h-auto"
            src="/lakoda-home-photo.jpeg"
            alt="Wrestler"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
