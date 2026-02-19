import React from "react";

const Journey = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-neutral-900" id="journey">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">My Journey</h2>
        <ol className="relative border-l border-purple-500/30">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full -left-4 ring-4 ring-neutral-900 text-white font-bold">1</span>
            <h3 className="font-semibold text-lg text-white">Completed SSC from Nagarwala School</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-purple-300">2023</time>
            <p className="mb-4 text-base font-normal text-gray-300">Secured 83% in SSC at Nagarwala School, Pune.</p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full -left-4 ring-4 ring-neutral-900 text-white font-bold">2</span>
            <h3 className="font-semibold text-lg text-white">Joined Vidyalankar Polytechnic</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-purple-300">2023</time>
            <p className="mb-4 text-base font-normal text-gray-300">Started pursuing Diploma in Information Technology. Secured 75% in First Year, 80% in Second Year, and 86% in 5th Semester.</p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full -left-4 ring-4 ring-neutral-900 text-white font-bold">3</span>
            <h3 className="font-semibold text-lg text-white">Started Learning Web Development</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-purple-300">March 2024</time>
            <p className="mb-4 text-base font-normal text-gray-300">Began with HTML and CSS, then moved on to JavaScript, React, Python, Node.js, and other modern technologies.</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Journey;
