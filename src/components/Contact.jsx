import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-gray-100 to-white" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Contact Me</h2>
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Message</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="5" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
