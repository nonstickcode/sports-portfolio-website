import React from 'react';

function Community() {
  return (
    <section id="community" className="w-full">
      <div className="container mx-auto flex flex-wrap">
        {/* Left side with images */}
        <div className="w-full md:w-1/2 flex flex-wrap">
          {/* Placeholder for Image 1 */}
          <div className="w-1/2">
            <img
              className="w-full h-auto object-cover"
              src="https://via.placeholder.com/300x400"
              alt="Community Service 1"
            />
          </div>
          {/* Placeholder for Image 2 */}
          <div className="w-1/2">
            <img
              className="w-full h-auto object-cover"
              src="https://via.placeholder.com/300x400"
              alt="Community Service 2"
            />
          </div>
        </div>
        {/* Right side with text */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-center bg-white text-gray-800 px-20 py-10">
          <div>
            <h2 className="text-4xl font-bold">COMMUNITY SERVICE</h2>
            <p className="mt-8 text-lg">
              At Mesquite High School, the students are encouraged to follow the
              Jesuit model "Men for and with Others." To do this, we are called
              to participate in various community service activities covering a
              wide array of social and personal issues. I have always made time
              to support my community and help others in need.
            </p>
            <p className="mt-4 text-lg">
              One outreach activity that I felt especially good about was
              working as a team to build a house for a family in Tijuana,
              Mexico. Working hard for the benefit of others is something that I
              personally enjoy, especially when you are able to witness the joy
              on their faces.
            </p>
            <p className="mt-4 text-lg">
              I am very thankful to be in a position to help others and wish to
              continue my community outreach throughout my life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
