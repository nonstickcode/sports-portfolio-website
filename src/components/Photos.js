import React from 'react';

function Photos() {
  return (
    <section id="photos" className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">PHOTO GALLERY</h2>
          <p className="text-lg text-gray-500 mt-4">
            Explore some of the best moments
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder Photo 1 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 1"
            />
          </div>

          {/* Placeholder Photo 2 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 2"
            />
          </div>

          {/* Placeholder Photo 3 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 3"
            />
          </div>

          {/* Placeholder Photo 4 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 4"
            />
          </div>

          {/* Placeholder Photo 5 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 5"
            />
          </div>

          {/* Placeholder Photo 6 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 6"
            />
          </div>

          {/* Placeholder Photo 7 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 7"
            />
          </div>

          {/* Placeholder Photo 8 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 8"
            />
          </div>

          {/* Placeholder Photo 9 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 9"
            />
          </div>

          {/* Placeholder Photo 10 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 10"
            />
          </div>

          {/* Placeholder Photo 11 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 11"
            />
          </div>

          {/* Placeholder Photo 12 */}
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Photos;
