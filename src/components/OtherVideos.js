import React from 'react';

function OtherVideos() {
  return (
    <section id="other-videos" className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">OTHER VIDEOS</h2>
          <p className="text-lg text-gray-500 mt-4">Watch additional content</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Video 1 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Other Video 1"
              allowFullScreen
            ></iframe>
          </div>

          {/* Placeholder Video 2 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Other Video 2"
              allowFullScreen
            ></iframe>
          </div>

          {/* Placeholder Video 3 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Other Video 3"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherVideos;
