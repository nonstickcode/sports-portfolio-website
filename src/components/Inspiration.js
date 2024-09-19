import React from 'react';

function Inspiration() {
  return (
    <section
      id="inspiration"
      className="w-full bg-center bg-cover text-blue-500"
      style={{
        backgroundImage: "url('/inspiration-placeholder.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Fills the width of the screen
      }}
    >
      <div className="container mx-auto text-center py-16">
        <h2 className="text-4xl font-bold">INSPIRATION</h2>
        <p className="mt-8 text-2xl italic">
          "Hard work beats talent when talent doesn't work hard."
        </p>
        <p className="mt-2 text-lg">— Tim Notke</p>
      </div>
    </section>
  );
}

export default Inspiration;
