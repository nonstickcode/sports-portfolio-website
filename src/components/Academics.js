import React from 'react';

function Academics() {
  return (
    <section id="academics" className="w-full py-8 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <div className="w-full mx-auto">
          <h1 className="text-4xl font-bold text-white">ACADEMIC EXPERIENCE</h1>
          <p className="text-lg text-gray-400 mt-4">My Studies</p>
        </div>

        {/* Outer Wrapper for Centering the Entire Content */}
        <div className="mt-8 max-w-6xl w-fit mx-8 lg:mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left Column: School Info */}
            <div className="w-full md:w-1/3 mr-4 text-left">
              <h2 className="text-2xl font-semibold text-gray-300">MESQUITE HIGH SCHOOL</h2>
              <ul className="mt-4 text-gray-400">
                <li>2022 Graduating Class</li>
                <li>Spring 2021 Transcript</li>
              </ul>

              {/* Placeholder for a photo or document icon */}
              <div className="mt-8">
                <img
                  src="https://via.placeholder.com/100"
                  alt="selfie small"
                  className="mx-auto"
                />
              </div>

              <h2 className="text-2xl font-semibold text-gray-300 mt-8">ACADEMIC AWARDS</h2>
              <ul className="mt-4 text-gray-400">
                <li>National Merit Scholar Semi-Finalist</li>
                <li>AP Scholar with Distinction</li>
                <li>USA Water Polo Academic All-American</li>
                <li>2019 Loyola Bear/Carlson Scholarship Recipient</li>
              </ul>
            </div>

            {/* Right Column: Courses and Grades */}
            <div className="w-full md:w-2/3 text-left mt-8 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-300">GPA & Standardized Tests</h3>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>GPA: 4.5 / 4.0 unweighted (includes Spring 2020)</li>
                <li>SAT: 1540 (800 Math, 740 Reading/Writing)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-300 mt-8">Freshman Courses</h3>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>Honors Algebra 2, Honors Spanish 1, Physics, English, Theology</li>
                <li>Health/Physical Education, Music Appreciation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-300 mt-8">Sophomore Courses</h3>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>Honor Pre-Calculus, Honors Chemistry, English, AP World History</li>
                <li>Theology, Black and White Photography</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-300 mt-8">Junior Courses</h3>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>AP Calculus BC, AP Chemistry, AP US History, AP English, Spanish 3</li>
                <li>Theology, Personal Finance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-300 mt-8">Senior Classes (Planned)</h3>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                <li>Honors Multi-Variable Calculus, AP Physics Mechanics, AP Statistics</li>
                <li>AP Economics, AP Literature, AP Theology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academics;
