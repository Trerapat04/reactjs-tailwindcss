// src/pages/Home.js
import React from "react";

function Home() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold">Welcome to web site</h1>
        <p className="text-lg mt-4">Practice designing websites with Tailwind CSS</p>
        <a href="#" className="bg-blue-500 text-white px-6 py-2 font-bold rounded-full mt-8 inline-block hover:bg-blue-700">Get Started</a>
      </div>
    </div>
  );
}

export default Home;
