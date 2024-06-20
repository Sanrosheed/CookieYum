// import React from 'react'
import ProductCard from "../layouts/ProductCard";
import img1 from "../assets/img/chocolateCookies.jpg";
import img2 from "../assets/img/whiteChocolateCookies.jpg";
import img3 from "../assets/img/macaroons.jpg";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Our Products
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img={img1} title="Chocolate Cookies" />
        <ProductCard img={img2} title="White Choco Cookies" />
        <ProductCard img={img3} title="Macaroons" />
      </div>
    </div>
  );
};

export default Product;
