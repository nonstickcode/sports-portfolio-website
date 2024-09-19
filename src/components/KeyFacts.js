import React from 'react';

function KeyFacts() {
  return (
    <section id="key-facts">
      <div className="py-12">
        <img
          src="/Lakoda-circular.jpeg"
          alt="Lakoda Garrison"
          className="w-96 h-96 mx-auto rounded-full"
        />
      </div>
      <div className="mx-auto px-4 pt-8 pb-16 text-center">
        <h2 className="text-5xl text-blue-200">Key Facts</h2>
        <h2 className="text-2xl mt-8">About Me</h2>
        <ul className="mt-6 text-base max-w-3xl mx-auto list-disc list-inside">
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
