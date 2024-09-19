import React from 'react';

function Athletics() {
  return (
    <section id="athletics" className="w-full py-8 bg-white">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <div className="w-full mx-auto">
          <h1 className="text-5xl font-bold text-gray-800">
            ATHLETIC EXPERIENCE
          </h1>
          <p className="text-lg text-gray-500 mt-4">Teams and Highlights</p>
        </div>

        {/* Outer Wrapper for Centering the Entire Content */}
        <div className="mt-8 max-w-6xl w-fit mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left Column: Teams */}
            <div className="w-full md:w-1/3 mr-4 text-left">
              <h2 className="text-2xl font-semibold text-gray-700">
                HIGH SCHOOL VARSITY WRESTLING
              </h2>
              <ul className="mt-4 text-gray-500">
                <li>Senior Year (Captain)</li>
                <li>Junior Year (Captain)</li>
                <li>Sophomore Year</li>
                <li>Freshman Year</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-700 mt-8">
                WRESTLING CLUB
              </h2>
              <ul className="mt-4 text-gray-500">
                <li>18u Team</li>
                <li>16u Team</li>
                <li>Regional and State Competitions</li>
              </ul>
            </div>

            {/* Right Column: Highlights */}
            <div className="w-full md:w-2/3 text-left mt-8 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-700">
                Senior Year (Captain)
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>Team Captain of Varsity Team</li>
                <li>Undefeated in the regular season</li>
                <li>State Qualifier</li>
                <li>1st place at the Regional Championships</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mt-8">
                Junior Year (Captain)
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>Captain for second consecutive year</li>
                <li>3rd place in State Championships</li>
                <li>Regional Champion</li>
                <li>All-Conference Team Selection</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mt-8">
                Sophomore Year
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>2nd place at State Championships</li>
                <li>1st place at Regional Championships</li>
                <li>Team's most valuable player</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mt-8">
                Freshman Year
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>Only freshman on Varsity team</li>
                <li>3rd place at State Championships</li>
                <li>All-State Honorable Mention</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mt-8">
                Wrestling Club
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>18u Team - State Champions</li>
                <li>16u Team - Regional Finalist</li>
                <li>National qualifier in freestyle wrestling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Athletics;
