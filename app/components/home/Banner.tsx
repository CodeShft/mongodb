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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full flex justify-center overflow-hidden py-4">
      <div className="w-[90%] max-w-[1200px] flex gap-4 justify-between flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="h-[15vh] sm:h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[35vh] w-[30%] flex-shrink-0 relative"
          >
            <div
              className={`absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50 transform transition-all duration-1000 ease-in-out ${
                activeImageIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[10%]" 
              } rounded-lg shadow-lg`} 
            >
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl font-extrabold tracking-wider uppercase glowing-text text-center px-1 sm:px-2 md:px-3">
                {image.sale}
              </span>
            </div>

            <img
              src={image.src}
              alt={`Banner ${index}`}
              className="sm:object-cover w-full h-full rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
