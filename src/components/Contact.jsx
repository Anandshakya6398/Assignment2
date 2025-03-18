import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-red-100 to-sky-100">
      <section className="py-12 px-6 max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="bg-white p-6 shadow-lg rounded-xl">
          <input
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            type="text"
            placeholder="Your Name"
          />
          <input
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            rows="4"
            placeholder="Your Message"
          ></textarea>
          <button className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
