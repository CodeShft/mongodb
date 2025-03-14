"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

const Cowboyheels = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const cards = [
    {
      image:
        "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/41322/uploads/urunresimleri/buyuk/siyah-erkek-kovboy-ayakkabisi-axe--b467-.jpg",
      name: "Bitter",
      price: "$49.99",
    },
    {
      image:
        "https://target.scene7.com/is/image/Target/GUEST_f3508d02-9b9a-41a7-a116-a825626ea8ed",
      name: "White Snow",
      price: "$55.00",
    },
    {
      image:
        "https://footwearnews.com/wp-content/uploads/2024/07/best-cowboy-boots-khaite.png?w=800&h=800&crop=1",
      name: "Black & White",
      price: "$89.99",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoDKEBi2NHrtVpXeswxu7JCy1oeQ8_IXZKg&s",
      name: "Barbie Cowboy",
      price: "$69.99",
    },
    {
      image:
        "https://i5.walmartimages.com/asr/00c7a2fd-9e20-44a0-adc6-a3e960c6982b.2c6843b9d9aa2c2d1f07ddfdb81e223f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Butterfly",
      price: "$75.00",
    },
    {
      image:
        "https://befreeshoes.es/media/catalog/product/cache/7795dbdfd36596b6305e17d7f8387ca6/s/a/sanse-373_snake_bronze-1.jpg",
      name: "Old but Gold",
      price: "$59.99",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8U8VMYaMOIQxbQmLxYJ0AQVBmD2HKYr5b6FK9opgz6xCfGXKQyvaNg_qynEYydrv_2HA&usqp=CAU",
      name: "Brown Eye",
      price: "$64.99",
    },
    {
      image: "https://i.ebayimg.com/images/g/R3cAAOSwKKZlE7Lg/s-l1600.jpg",
      name: "Pink Gum",
      price: "$79.99",
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H3a4cbfa6e1ca4693bcbeb5144c814abfL.jpg_300x300.jpg",
      name: "Blue Owl",
      price: "$69.00",
    },
    {
      image:
        "https://cdn.media.amplience.net/i/scvl/161628_354551_1?fmt=auto&w=640",
      name: "Rock Star",
      price: "$63.00",
    },
    {
      image:
        "https://i5.walmartimages.com/seo/Dingo-Womens-Fine-N-Dandy-Fringe-Studded-Snip-Toe-Casual-Boots-Ankle-Mid-Heel-2-3_936ce384-bde2-46a1-91fe-2c9a97c6f3c5.bbb58248c27f9e9d2c8c6aa85387fe2f.jpeg",
      name: "Yellow Stone",
      price: "$55.00",
    },
    {
      image:
        "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/n/12/8b5ea7e0-1509-4d03-a103-b48a62ea2dbd.png",
      name: "Orange Juice",
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

export default Cowboyheels;
