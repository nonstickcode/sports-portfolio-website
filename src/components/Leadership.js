import React from 'react';

function Leadership() {
  return (
    <section id="leadership" className="w-full py-8">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <div className="w-full mx-auto">
          <h1 className="text-4xl font-bold text-blue-500">
            LEADERSHIP ACTIVITIES
          </h1>
          <p className="text-lg lg:px-80 mt-4">
            I believe in paying it forward. I have had coach and teacher role
            models who have helped shape me as a student, athlete, and person. I
            respect and appreciate inspiring leaders. I have developed and am
            continuing to build leadership skills so that I can help my teams
            and others achieve success.
          </p>
        </div>

        {/* Leadership Icons and Descriptions */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-40 gap-8 text-center">
          {/* Math Tutor */}
          <div>
            <div className="mx-auto">
              {/* Placeholder Icon */}
              <img
                src="https://via.placeholder.com/50"
                alt="Math Tutor Icon"
                className="mx-auto mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold">MATH TUTOR</h3>
            <p className="mt-2 lg:px-10">
              I am passionate about math and have been told I have a gift for
              explaining concepts to other students.
            </p>
          </div>

          {/* Assistant Coach */}
          <div>
            <div className="mx-auto">
              {/* Placeholder Icon */}
              <img
                src="https://via.placeholder.com/50"
                alt="Assistant Coach Icon"
                className="mx-auto mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold">ASSISTANT COACH</h3>
            <p className="mt-2 lg:px-10">
              I enjoy coaching. This past summer I got CPR and First Aid
              certified and helped train a 10u wrestling team.
            </p>
          </div>

          {/* Team Leadership */}
          <div>
            <div className="mx-auto">
              {/* Placeholder Icon */}
              <img
                src="https://via.placeholder.com/50"
                alt="Team Leadership Icon"
                className="mx-auto mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold">TEAM LEADERSHIP</h3>
            <p className="mt-2 lg:px-10">
              Selected captain for Varsity team. Orchestrated team workouts
              during challenging times. Prior captain of the 14u and 16u
              wrestling teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
