// import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">CookieYum</h1>
          <p className="text-sm">
            Welcome to our cookie haven!. Explore our yummy, delicious and
            breathtaking flavors, and discover the perfect treats for your
            upcoming event.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Products
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Chocolate Cookies
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              White Choco Cookies
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Macaroons
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              CookieYum@gmail.com
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              +234 777 888 999
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Social Media
            </a>
          </nav>
        </div>
      </div>

      <div>
        <p className="text-center py-4">
          @copyright developed by{" "}
          <span className="text-backgroundColor">Sanrosheed</span> | All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
