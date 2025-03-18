import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
          <h1 className="text-xl font-bold text-blue-600 cursor-pointer">House of MarkTech</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
