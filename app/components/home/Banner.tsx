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
    <div className="w-full flex justify-center overflow-hidden py-3">
      <div className="w-[95%] max-w-[1200px] grid grid-cols-3 gap-2">
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
  );
};

export default Banner;
