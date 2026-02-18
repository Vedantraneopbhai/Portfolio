import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-lg">Vedant's Portfolio</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition">Twitter</a>
        </div>
        <div className="mt-4 md:mt-0 text-sm">&copy; {new Date().getFullYear()} Vedant. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
