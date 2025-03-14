"use client";

import { useState } from "react";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

const Booties = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const cards = [
    {
      image:
        "https://media.kohlsimg.com/is/image/kohls/6795619_Gray?wid=240&hei=240&op_sharpen=1",
      name: "Moonlight",
      price: "$49.99",
    },
    {
      image:
        "https://www.coopersofstortford.co.uk/images/products/medium/P049_GRYi_3.jpg",
      name: "Grey Cloud",
      price: "$55.00",
    },
    {
      image:
        "https://staticv3.smallable.com/1530942-406x406q80/low-shearling-light-moon-boots.webp",
      name: "Light Glow",
      price: "$89.99",
    },
  ];

  const handleAddToCart = (name: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [name]: (prevCart[name] || 0) + 1,
    }));
  };

  return (
    <div className="max-h-screen overflow-auto p-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {cards.map((card) => (
          <div
            key={card.name}
            className="bg-white border border-gray-400 rounded-lg p-1.5 flex flex-col items-center transform transition-transform duration-300 hover:scale-95"
          >
            <div className="w-full relative pb-[80%] sm:pb-[70%] md:pb-[65%]">
              <Image
                src={card.image}
                alt={card.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-800 mt-1.5">
              {card.name}
            </h3>
            <p className="text-lg font-bold text-orange-600">{card.price}</p>

            <div className="flex justify-center w-full mt-1.5">
              <button
                onClick={() => handleAddToCart(card.name)}
                className="text-white text-xs bg-green-500 px-2 py-1 rounded-lg hover:bg-green-600 flex items-center"
              >
                <PlusCircleIcon className="h-4 w-4 mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booties;