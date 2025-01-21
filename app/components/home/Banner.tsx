"use client";

import { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    {
      src: "https://daily.jstor.org/wp-content/uploads/2019/03/the_inherent_drama_of_high_heels_1050x700.jpg",
      sale: "On Sale 20% Off",
    },
    {
      src: "https://img.freepik.com/premium-photo/white-high-heel-shoe-purple-blue-background_853677-207925.jpg",
      sale: "On Sale 30% Off",
    },
    {
      src: "https://img.freepik.com/premium-photo/pink-high-heel-shoe-pastel-color-background_70898-18075.jpg",
      sale: "On Sale 40% Off",
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-4xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
                style={{ width: "24px", height: "24px" }}
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="text-xl font-bold text-gray-800 text-center">
              Welcome to Click.com
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Explore our elegant collection of Stilettos. Click any Stiletto to
              learn more!
            </p>
            <button
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md block mx-auto relative glow-effect"
              onClick={() => setShowModal(false)}
            >
              Shop Now
              <span className="absolute inset-0 bg-purple-200 animate-ping duration-2000 rounded-full"></span>
            </button>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center overflow-hidden py-3">
        <div className="w-[95%] max-w-[800px] lg:max-w-[1000px] grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-md shadow-sm overflow-hidden"
            >
              <div
                className={`absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50 transform transition-all duration-1000 ease-in-out ${
                  activeImageIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[10%]"
                }`}
              >
                <span className="text-[8px] sm:text-xs md:text-sm lg:text-base font-extrabold tracking-wide uppercase text-center px-1">
                  {image.sale}
                </span>
              </div>
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={`Banner ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Banner;
