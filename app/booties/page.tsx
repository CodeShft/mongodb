"use client";

import { useState } from "react";
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
    {
      image:
        "https://dms.deckers.com/koolaburra/image/upload/f_auto,q_auto,dpr_auto/v1718121271/catalog/images/transparent/1158590-SVPN_1.png?_s=RAABAB0",
      name: "Pink Panther",
      price: "$69.99",
    },
    {
      image:
        "https://media.callitspring.com/v3/product/needa/200-002-031/needa_brown_200-002-031_main_sq_wt_1000x1000.jpg",
      name: "Cool Lime",
      price: "$75.00",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e8MdXsgVK_t2LlqtmWMcr99ulXId5NTxlQ&s",
      name: "Grey Cloud",
      price: "$59.99",
    },
    {
      image:
        "https://www.marshallshoes.co.uk/images/womens-680-13-samtchevreau-purple-suede-zip-up-ankle-boots-p17228-63342_image.jpg",
      name: "Snake Purple",
      price: "$64.99",
    },
    {
      image:
        "https://www.fluevog.com/images/wanderer-purple-lace-up-ankle-boots-profile-inside-colour_image-0000029745-retina_detail.webp",
      name: "Purple Life",
      price: "$79.99",
    },
    {
      image:
        "https://thursdayboots.com/cdn/shop/products/1024X1024-Women-Luna-Baby-081721-SideZipper.jpg?v=1630613382&width=1024",
      name: "Elegant Blue",
      price: "$69.00",
    },
    {
      image:
        "https://alexamaries.com/cdn/shop/products/image_eba2f8f9-7e92-4b20-81f1-4b210b33b236.jpg?v=1664817325",
      name: "White Pearl",
      price: "$63.00",
    },
    {
      image:
        "https://mcozyboots.com/cdn/shop/products/11302021-5302_1080x.jpg?v=1638791374",
      name: "Yellow Party",
      price: "$55.00",
    },
    {
      image:
        "https://di2ponv0v5otw.cloudfront.net/posts/2024/02/13/65cba3df0841b9caa34d6ae4/s_wp_65cba3e1678c3a382756c1cf.webp",
      name: "Rainbow",
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
                alt={`Bootie ${card.name}`}
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

export default Booties;
