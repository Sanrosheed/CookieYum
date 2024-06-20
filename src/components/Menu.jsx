// import React from 'react'

import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/img/cookies.jpg";
import img2 from "../assets/img/cookie2.jpg";
import img3 from "../assets/img/cookie3.jpg";
import img4 from "../assets/img/cookie4.jpg";
import img5 from "../assets/img/cookie5.jpg";
import img6 from "../assets/img/cookie6.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>

      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Chocolate Chip Cookies" />
        <MenuCard img={img2} title="Double Chocolate Cookies" />
        <MenuCard img={img3} title="Thumbprint Jam Cookies" />
        <MenuCard img={img4} title="Macaroons" />
        <MenuCard img={img5} title="Red Velvet Cookies" />
        <MenuCard img={img6} title="Oreos" />
      </div>
    </div>
  );
};

export default Menu;
