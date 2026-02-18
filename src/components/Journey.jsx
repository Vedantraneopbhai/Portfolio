import React from "react";

const Journey = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-white to-gray-100" id="journey">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">My Journey</h2>
        <ol className="relative border-l border-gray-300">
          {/* Example Timeline Item */}
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-4 ring-4 ring-white text-white font-bold">1</span>
            <h3 className="font-semibold text-lg text-gray-700">Started Learning Web Development</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2022</time>
            <p className="mb-4 text-base font-normal text-gray-600">Began my journey with HTML, CSS, and JavaScript, building small projects and learning the basics.</p>
          </li>
          {/* Add more timeline items here */}
        </ol>
      </div>
    </section>
  );
};

export default Journey;
