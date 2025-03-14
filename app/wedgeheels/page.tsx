"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

const wedgeheels = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const cards = [
    {
      image:
        "https://chaniibshoes.com/cdn/shop/products/IMG_6947.jpg?v=1591658892",
      name: "Orange Dream",
      price: "$49.99",
    },
    {
      image:
        "https://label-source.co.uk/cdn/shop/files/IMG_3017-Photoroom_03159ad5-711c-4cbd-9ad3-91fbb9ae34bd.jpg?v=1731084338",
      name: "Cool Black",
      price: "$55.00",
    },
    {
      image:
        "https://aprajitatoor.com/wp-content/uploads/2023/04/Blue-Half-wedge-heels-side.jpg",
      name: "Shade of Black",
      price: "$89.99",
    },
    {
      image:
        "https://5.imimg.com/data5/LS/GX/MY-5862168/pink-fancy-party-wear-wedges-heels-for-women-500x500.png",
      name: "Barbie Pink",
      price: "$69.99",
    },
    {
      image:
        "https://image.made-in-china.com/202f0j00sYcoLHJlrnpq/10-Cm-Wedge-High-Heels-Female-Shoes-New-Pointy-Patent-Leather-All-Matching-Wedge-Heel-Pump-Shoes-for-Women.webp",
      name: "Cool Lime",
      price: "$75.00",
    },
    {
      image:
        "https://target.scene7.com/is/image/Target/GUEST_9c50f71e-006a-4ed4-8a9f-355338b1ed61?wid=488&hei=488&fmt=pjpeg",
      name: "Sparkling",
      price: "$59.99",
    },
    {
      image:
        "https://images.vestiairecollective.com/images/resized/w=1246,q=75,f=auto,/produit/purple-leather-bottega-veneta-heels-44767604-1_2.jpg",
      name: "Snake Purple",
      price: "$64.99",
    },
    {
      image:
        "https://sreeleathers.com/cdn/shop/files/04446_490_2copy_800x.jpg?v=1720880734",
      name: "Purple Life",
      price: "$79.99",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T-FKy-DL_oEIquOpYvy2_oG60As6cr2kfA&s",
      name: "Elegant Blue",
      price: "$69.00",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/4/KU/LB/PB/151158092/san126-gy-1--500x500.jpg",
      name: "White Pearl",
      price: "$63.00",
    },
    {
      image:
        "https://thecaistore.com/cdn/shop/files/Flower2V2_720x.jpg?v=1708942354",
      name: "Yellow Party",
      price: "$55.00",
    },
    {
      image:
        "https://boho-mood.com/cdn/shop/files/boho-wedge-sandals-rainbow-29850677805254_2000x.jpg?v=1732468989",
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
                alt={`Block Heel: ${card.name}`}
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

export default wedgeheels;
