// import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import PropTypes from "prop-types";

const ReviewCard = (props) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
      <div className="flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img className="w-20 h-20 rounded-full" src={props.img} alt="" />
        </div>

        <div className="mx-3">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="flex">
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarHalf className="text-brightColor" />
          </div>
        </div>
        <span className="ml-16">
          <FaQuoteRight className="text-brightColor" size={42} />
        </span>
      </div>
      <p>
        The Cookies taste very delicious. I love how they were packaged and well
        baked. Nice customer service too. i cannot wait to patronize you again
      </p>
    </div>
  );
};

ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReviewCard;
