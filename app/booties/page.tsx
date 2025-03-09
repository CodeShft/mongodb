"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

const booties = () => {
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
      name: "light Glow",
      price: "$89.99",
    },
    {
      image:
        "https://d2t3e0kiu1cfvy.cloudfront.net/product/3c/65787006b16_SP2023-12-424_1_large.jpg",
      name: "Mocha",
      price: "$69.99",
    },
    {
      image:
        "https://alssports.vtexassets.com/arquivos/ids/2651465/10539248x1125317.jpg?v=638627889361270000",
      name: "Fur Monster",
      price: "$75.00",
    },
    {
      image:
        "https://nationalworkwear.com.au/cdn/shop/products/312361_8_1200x1029.jpg?v=1581714811",
      name: "Jeans",
      price: "$59.99",
    },
    {
      image:
        "https://www.fluevog.com/images/haring-purple-leather-mid-calf-boot-quarter-view-colour_image-0000025621-retina_detail.jpg",
      name: "Purple Mulberry",
      price: "$64.99",
    },
    {
      image:
        "https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/3/2/3240867bk01-3240867bk01-main_image-ecommerce-christianlouboutin-marchacrocheduna-3240867_bk01_1_1200x1200_202405072205.jpg",
      name: "Black Seal",
      price: "$79.99",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS122bp4BnlXSNDUMKRB62pZywZxPhOc3EnOw&s",
      name: "Star Light",
      price: "$69.00",
    },
    {
      image:
        "https://www.uggoutlet.com.au/cdn/shop/files/fashion-boots-ta-colette-women-ankle-boots-flat-ugg-fashion-boots-4.jpg?v=1738971147&width=600",
      name: "Brown Sugar",
      price: "$63.00",
    },
    {
      image:
        "https://hunterboots.com/cdn/shop/files/f828c5a93bac19affb89bd4730b3df5eea22fa52.jpg?v=1728929237",
      name: "Rainy Day",
      price: "$55.00",
    },
    {
      image:
        "https://cdn.attitudeholland.nl/_clientfiles/King/17000108%20New%20Rock/108M-120N-S14-L-New%20Rock-.jpg?size=l",
      name: "white Flag",
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
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-400 rounded-lg p-1.5 flex flex-col items-center transform transition-transform duration-300 hover:scale-95"
          >
            <div className="w-full relative pb-[80%] sm:pb-[70%] md:pb-[65%]">
              <img
                src={card.image}
                alt={`Cowboy Heel ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
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

export default booties;
