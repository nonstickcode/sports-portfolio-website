import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          For inquiries, recruitment information, or more details about my
          athletic journey, feel free to reach out!
        </p>
        <div className="mt-8">
          <a
            href="mailto:john.doe@example.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-500 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
