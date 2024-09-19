import React from 'react';

function Highlights() {
  return (
    <section id="highlights" className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">HIGHLIGHTS</h2>
          <p className="text-lg mt-4">Watch some of the best moments</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Video 1 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Highlight Video 1"
              allowFullScreen
            ></iframe>
          </div>

          {/* Placeholder Video 2 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Highlight Video 2"
              allowFullScreen
            ></iframe>
          </div>

          {/* Placeholder Video 3 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Highlight Video 3"
              allowFullScreen
            ></iframe>
          </div>

          {/* Placeholder Video 4 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Highlight Video 4"
              allowFullScreen
            ></iframe>
          </div>

          {/* Placeholder Video 5 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Highlight Video 5"
              allowFullScreen
            ></iframe>
          </div>

          {/* Placeholder Video 6 */}
          <div className="w-full">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/placeholder"
              title="Highlight Video 6"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
