import React from 'react';

function KeyFacts() {
  return (
    <section id="key-facts">
      <div className="py-8">
        <img
          src="/lakoda-about-me-photo.jpeg"
          alt="Lakoda Garrison"
          className="w-96 h-96 mx-auto rounded-full"
        />
      </div>
      <div className="mx-auto px-4 pb-8 text-center">
        <h2 className="text-4xl text-blue-500">Key Facts</h2>
        <h2 className="text-2xl mt-4">About Me</h2>
        <ul className="mt-4 text-base max-w-3xl mx-auto list-disc list-inside">
          <li>2026 High School Graduation</li>
          <li>16 years old</li>
          <li>6'11" 345 lbs</li>
          <li>Position: Killer/Smasher</li>
          <li>Right Handed</li>
          <li>GPA 3.9</li>
          <li>SAT 1500</li>
          <li>NCAA Eligibility number UNKNOWN</li>
        </ul>
      </div>
    </section>
  );
}

export default KeyFacts;
