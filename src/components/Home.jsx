// import React from 'react'
import Button from "../layouts/Button";
import image from "../assets/img/cookiees.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-5xl text-center lg:text-start leading-tight">
          Start your day with a delicious cookie
        </h1>
        <p>
          Boost your productivity with a yummy, sumptuous and nourishing cookie
          today.
        </p>

        <div className="flex flex-row gap-6">
          <Button title="ADD TO CART" />
          <Button title="MORE MENU" />
        </div>
      </div>
      <div className="relative">
        <img src={image} alt="img" />

        <div className="absolute bg-white px-8 py-2 top-5 right-4 lg:right-24 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,0.7)]">
          <h2 className="font-semibold">14k</h2>
        </div>

        <div className="absolute bg-white px-8 py-2 bottom-0 lg:bottom-8 left-18 rounded-full shadow-[0_20px_58px_rgba(8,_112,_184,0.7)]">
          <h2>M&M Cookies</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
