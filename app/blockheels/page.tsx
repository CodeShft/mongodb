"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

const Blockwheels = () => {
  const [_cart, setCart] = useState<{ [key: string]: number }>({});

  const cards = [
    {
      image:
        "https://aprajitatoor.com/wp-content/uploads/2022/05/round-block-heel-pastel-side.jpg",
      name: "Pink Panther",
      price: "$49.99",
    },
    {
      image:
        "https://aprajitatoor.com/wp-content/uploads/2021/03/Hues-Rings-Block-Heels.jpg",
      name: "Colorful Life",
      price: "$55.00",
    },
    {
      image:
        "https://www.bellabelleshoes.com/cdn/shop/products/bella-belle-shoes-fabiola-blush-block-heel-sandals-with-pearls-3_720x.jpg?v=1665065714",
      name: "White Bride",
      price: "$89.99",
    },
    {
      image: "https://i.ebayimg.com/images/g/LJMAAOSwRm5j~p~o/s-l1200.jpg",
      name: "Blue Sky",
      price: "$69.99",
    },
    {
      image:
        "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/9/e/2/9e27adc0414271b43095cf1206f7260f.jpg",
      name: "Black Beauty",
      price: "$75.00",
    },
    {
      image:
        "https://i5.walmartimages.com/seo/Allegra-K-Women-s-Glitter-Ankle-Strap-High-Block-Heel-Sandals_4ed00a4e-1a00-4e99-84fb-f97b1478b42f.5e0108a928aff176b259ad309275deee.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Sparkling Pink",
      price: "$59.99",
    },
    {
      image:
        "https://5thave-img-cdn.beyondstyle.us/pf/327d9754-892a-3d61-b2c9-c01419de6056.jpg?x-oss-process=style/s1",
      name: "Pink Rose",
      price: "$64.99",
    },
    {
      image:
        "https://i5.walmartimages.com/asr/b3d9d243-e873-43bf-bfe0-6638dba67bcf.fbe320f375e3f0dcf72135141b0cb15f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Purple Rain",
      price: "$79.99",
    },
    {
      image:
        "https://aprajitatoor.com/wp-content/uploads/2023/05/Aloha-Neon-Pink-Round-Block-Heels-side-2-578x800.jpg",
      name: "Orange River",
      price: "$69.00",
    },
    {
      image:
        "https://shoesondelmar.com/cdn/shop/files/lasting-158.webp?v=1739197769&width=800",
      name: "Brownie",
      price: "$63.00",
    },
    {
      image:
        "https://www.fluevog.com/images/nimbus-yellow-contrast-loafer-heels-profile-inside-colour_image-0000023837-retina_detail.jpg",
      name: "Yellow Sun",
      price: "$55.00",
    },
    {
      image: "https://www.softmoc.com/items/images/W30825_XXX.jpg",
      name: "Red Cherry",
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
                alt={`Block Heel ${index + 1}`}
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

export default Blockwheels;
