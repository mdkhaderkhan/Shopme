import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { GrInsecure } from "react-icons/gr";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 sm:py-0 bg-gray-800">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Image */}
          <div className="flex justify-center" data-aos="zoom-in">
            <img
              className="w-full max-w-[500px] object-cover rounded-lg shadow-md"
              src="https://t4.ftcdn.net/jpg/05/40/11/77/360_F_540117789_lSLS9byX93x2AiUcojqSbgSjb2KFyARt.jpg"
              alt="Zoom In Example"
            />
          </div>

          {/* Right Column: Text + Features */}
          <div className="flex flex-col justify-center">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Welcome to Winter Sale - Up to 50% Off
            </h1>

            <div data-aos="fade-up" className="text-sm mt-3">
              <p className="text-gray-300 p-2">
                Fuel your style this winter with high-performance streetwear.
                Crafted for comfort, bold in design — exclusive discounts await!
              </p>

              {/* Features Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">

                {/* Quality Product */}
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GrInsecure className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-violet-400 text-black" />
                  <p className="text-white">Quality Product</p>
                </div>

                {/* Fast Delivery */}
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <IoFastFoodOutline className="text-4xl h-12 w-12 p-3 rounded-full bg-orange-200 dark:bg-orange-500 text-black" />
                  <p className="text-white">Fast Delivery</p>
                </div>

                {/* Easy Payment */}
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GrInsecure className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-violet-400 text-black" />
                  <p className="text-white">Easy Payment Method</p>
                </div>

                {/* Get Offers */}
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 p-3 rounded-full bg-orange-200 dark:bg-orange-500 text-black" />
                  <p className="text-white">Get Offers</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;
