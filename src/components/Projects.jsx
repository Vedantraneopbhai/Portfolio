import React from "react";

const Projects = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* E-Commerce Website */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Website</h3>
            <p className="text-gray-600 mb-4">A full-featured e-commerce platform with product listings, cart, and secure checkout.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Booki It Up (BookMyShow Replica) */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Booki It Up</h3>
            <p className="text-gray-600 mb-4">A replica of BookMyShow for booking movie and event tickets online.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Portfolio Website */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">My Portfolio</h3>
            <p className="text-gray-600 mb-4">A modern, responsive portfolio website built with React and Tailwind CSS.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Career Page for Secure Cyber Future */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Career Page - Secure Cyber Future</h3>
            <p className="text-gray-600 mb-4">A career portal for Secure Cyber Future, featuring job listings and application tracking.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Timetable Scheduler */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Timetable Scheduler</h3>
            <p className="text-gray-600 mb-4">A smart timetable scheduler for students and teachers to manage classes efficiently.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Learnify - AI Driven Study Tracker */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Learnify</h3>
            <p className="text-gray-600 mb-4">An AI-driven study tracker to help students plan, track, and optimize their learning.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Project 7: (Add a unique project or a summary project) */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Personal Blog Platform</h3>
            <p className="text-gray-600 mb-4">A customizable blog platform for sharing articles, tutorials, and project updates.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
