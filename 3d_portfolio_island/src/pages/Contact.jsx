import React from 'react';
import { socialLinks } from '../constants';

const Contact = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text font-semibold drop-shadow">Contact</span> Info
      </h1>

      <p className="mt-5 flex flex-col gap-3 text-slate-500">
        There are several ways to reach out to me. Feel free to send an email or text, or check out my LinkedIn or GitHub!
      </p>

      <div className="flex flex-wrap gap-6 my-20 justify-center">
        {/* Map over socialLinks for LinkedIn and GitHub Cards */}
        {socialLinks.map((link) => (
          <a
            href={link.link}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white p-6 w-80 h-60 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-3/4 h-3/4 flex justify-center items-center ">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-2xl  mt-2">{link.name}</span>
          </a>
        ))}

        {/* Contact Info Card */}
        <div className="flex flex-col items-center bg-white p-6 w-80 h-60  border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <span className="font-semibold text-2xl mb-2">Contact</span>
          <p className="text-lg text-center text-slate-500">Email: danchin327@gmail.com</p>
          <p className="text-lg text-center text-slate-500">Phone: (720) 201-4930</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
