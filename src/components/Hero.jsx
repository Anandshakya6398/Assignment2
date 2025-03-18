import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/OIP.jpg')] bg-cover bg-center text-white">
      <section
        className="w-full min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      >
        {/* Adjusted overlay opacity */}
   
        <div className="text-center p-8 rounded-lg max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl  font-bold">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl mt-4">
            This is my Assignment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;