// import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';


// The Contact Page is used with Email. But due to limited tokens and unauthorized apis issues, the form has been replaced with a simple contact page.



import React from 'react';

const Contact = () => {
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-2-[50%] flex flex-col items-center">
        <h1 className="head-text text-center mb-8">Contact info!</h1>

        {/* New Contact Cards */}
        <div className="flex flex-col lg:flex-col gap-6 justify-center items-center">

          {/* LinkedIn Card */}
          <div className="card flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <a href="https://www.linkedin.com/in/danielkchin/" target="_blank" rel="noopener noreferrer" className="text-center">
              <img src="linkedin-icon.png" alt="LinkedIn" className="w-10 h-10 mb-2" /> {/* Add LinkedIn icon image */}
              <span className="font-semibold text-lg">LinkedIn</span>
            </a>
          </div>

          {/* GitHub Card */}
          <div className="card flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <a href="https://github.com/DanielChin327" target="_blank" rel="noopener noreferrer" className="text-center">
              <img src="github-icon.png" alt="GitHub" className="w-10 h-10 mb-2" /> {/* Add GitHub icon image */}
              <span className="font-semibold text-lg">GitHub</span>
            </a>
          </div>

          {/* Contact Info Card */}
          <div className="card flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <span className="font-semibold text-lg">Contact</span>
              <p className="text-sm mt-2">Email: daniel@example.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Commented out the original form code */}
        {/*
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Place name here'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='example@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              type='message'
              rows={4}
              className='textarea'
              placeholder='Let me know if you have questions!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...': 'Send Message'}
          </button>
        </form>
        */}
      </div>
    </section>
  );
};

export default Contact;
