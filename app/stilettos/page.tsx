"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

const stilettos = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const cards = [
    {
      image:
        "https://ae01.alicdn.com/kf/S4ccb1bf665e146fbbf6f2138a61de2e3o.jpg",
      name: "Shiny Blue",
      price: "$79.99",
    },
    {
      image:
        "https://www.aooar.com/cdn/shop/products/2_8e3e7971-71ce-4c02-89e9-454ed8ee1971_300x300.jpg?v=1619335962",
      name: "Matte Blue",
      price: "$65.00",
    },
    {
      image:
        "https://productimages.hepsiburada.net/s/46/375-375/10859982389298.jpg",
      name: "Salmon Color",
      price: "$69.99",
    },
    {
      image:
        "https://i5.walmartimages.com/seo/Women-s-Red-Pointed-Toe-High-Heels-Sexy-Soft-Sole-Slip-On-Stiletto-Heels-Party-Dress-Shoes_03448892-5f80-4b2f-afa9-01c6b4c33a6a.92271ada650d114733955e14ce4037e1.jpeg?odnHeight=264&odnWidth=264&odnBg=FFFFFF",
      name: "Shiny Red",
      price: "$89.99",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/pair-black-suede-high-heel-600nw-2239493375.jpg",
      name: "Plain Black",
      price: "$55.00",
    },
    {
      image:
        "https://cdn-2.jjshouse.com/upimg/s400/6b/69/e3168499c96a94fdf64e711591246b69.jpg",
      name: "Sparkling",
      price: "$99.99",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230602/wF7B/64796d9e42f9e729d7141d58/-473Wx593H-461888136-pink-MODEL.jpg",
      name: "Pink",
      price: "$75.00",
    },
    {
      image:
        "https://productimages.hepsiburada.net/s/46/375-375/10859971772466.jpg",
      name: "Cotton Candy",
      price: "$85.00",
    },
    {
      image: "https://m.media-amazon.com/images/I/61xRHj2SRWL.jpg",
      name: "Elegant Red",
      price: "$120.00",
    },
    {
      image: "https://m.media-amazon.com/images/I/51KTJMLsKZL._AC_UY900_.jpg",
      name: "Purple",
      price: "$90.00",
    },
    {
      image:
        "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/24939518_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=342&hei=417",
      name: "Shiny Gray",
      price: "$77.99",
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/Hecf8be006e0f421b8ed4fb28fddaa63eK.jpg_720x720q50.jpg",
      name: "Emerald",
      price: "$110.00",
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
                alt={`Stiletto ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-contain rounded-md"
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

export default stilettos;
