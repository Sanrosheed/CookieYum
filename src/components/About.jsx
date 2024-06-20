// import React from 'react'\

import image from "../assets/img/abtimage2.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        About Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-2/4">
          <img className="rounded-lg" src={image} alt="img" />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3">
          <h2 className="font-semibold text-3xl">
            What Makes Our Cookies Special?
          </h2>
          <p>
            Our cookies are made by the best chefs from different parts of the
            world. Consisting of a variety of flavors, we make different cookies
            in accordance to your preferences.
          </p>
          <p>
            A bite gives you an elysian feeling while keeping you elated and
            nourished
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
