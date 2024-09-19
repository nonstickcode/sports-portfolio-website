import React from 'react';

function Character() {
  return (
    <section id="character" className="w-full">
      <div className="container mx-auto flex flex-wrap">
        {/* Left side with text */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-center p-8">
          <div>
            <h2 className="text-4xl font-bold">CHARACTER</h2>
            <p className="mt-8 text-lg">
              I strive to embody the highest standards of integrity and personal
              responsibility, both on and off the field. Throughout my academic
              and athletic career, I have faced many challenges that have tested
              my perseverance and resolve, but each time, I’ve used these
              obstacles as an opportunity to grow and develop as a person.
            </p>
            <p className="mt-4 text-lg">
              Being a leader is not just about being successful, but about
              setting an example through actions and showing kindness and
              respect to everyone. Whether in the classroom, on the mat, or
              within my community, I hold myself to a high standard of behavior
              and effort.
            </p>
            <p className="mt-4 text-lg">
              My dedication to hard work, honesty, and compassion forms the
              foundation of my character. These values guide my decisions and
              shape who I am, and I am committed to carrying them with me as I
              continue my journey.
            </p>
          </div>
        </div>

        {/* Right side with placeholder image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src="https://via.placeholder.com/600x400"
            alt="Character"
          />
        </div>
      </div>
    </section>
  );
}

export default Character;
