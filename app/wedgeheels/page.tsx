"use client";

import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";

const Wedgeheels = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cards = [
    {
      image:
        "https://chaniibshoes.com/cdn/shop/products/IMG_6947.jpg?v=1591658892",
      name: "Orange Dream",
      price: 49.99,
    },
    {
      image:
        "https://label-source.co.uk/cdn/shop/files/IMG_3017-Photoroom_03159ad5-711c-4cbd-9ad3-91fbb9ae34bd.jpg?v=1731084338",
      name: "Cool Black",
      price: 55.0,
    },
    {
      image: "https://i1.adis.ws/i/truworths/prod3192978_1.jpeg",
      name: "Shade of Black",
      price: 89.99,
    },
    {
      image:
        "https://5.imimg.com/data5/LS/GX/MY-5862168/pink-fancy-party-wear-wedges-heels-for-women-500x500.png",
      name: "Barbie Pink",
      price: 69.99,
    },
    {
      image:
        "https://image.made-in-china.com/202f0j00sYcoLHJlrnpq/10-Cm-Wedge-High-Heels-Female-Shoes-New-Pointy-Patent-Leather-All-Matching-Wedge-Heel-Pump-Shoes-for-Women.webp",
      name: "Cool Lime",
      price: 75.0,
    },
    {
      image:
        "https://target.scene7.com/is/image/Target/GUEST_9c50f71e-006a-4ed4-8a9f-355338b1ed61?wid=488&hei=488&fmt=pjpeg",
      name: "Sparkling",
      price: 59.99,
    },
    {
      image:
        "https://images.vestiairecollective.com/images/resized/w=1246,q=75,f=auto,/produit/purple-leather-bottega-veneta-heels-44767604-1_2.jpg",
      name: "Snake Purple",
      price: 64.99,
    },
    {
      image:
        "https://saintg.us/cdn/shop/files/1_539447b8-c7a5-44da-93f6-3121ac03bf3f.jpg?v=1719060141&width=1080",
      name: "Purple Life",
      price: 79.99,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T-FKy-DL_oEIquOpYvy2_oG60As6cr2kfA&s",
      name: "Elegant Blue",
      price: 69.0,
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/4/KU/LB/PB/151158092/san126-gy-1--500x500.jpg",
      name: "White Pearl",
      price: 63.0,
    },
    {
      image:
        "https://thecaistore.com/cdn/shop/files/Flower2V2_720x.jpg?v=1708942354",
      name: "Yellow Party",
      price: 55.0,
    },
    {
      image:
        "https://boho-mood.com/cdn/shop/files/boho-wedge-sandals-rainbow-29850677805254_2000x.jpg?v=1732468989",
      name: "Rainbow",
      price: 89.99,
    },
  ];

  const handleAddToCart = (name: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [name]: (prevCart[name] || 0) + 1,
    }));

    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  };

  const handleRemoveFromCart = (name: string) => {
    const newCart = { ...cart };
    delete newCart[name];
    setCart(newCart);
  };

  const handleUpdateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(name);
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [name]: quantity,
      }));
    }
  };

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, name) => {
      const item = cards.find((card) => card.name === name);
      if (item) {
        total += item.price * cart[name];
      }
      return total;
    }, 0);
  };

  return (
    <div className="flex flex-col md:flex-row relative">
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      <div className="p-7 flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-400 rounded-lg p-2 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              <div className="w-full relative pb-[70%] sm:pb-[70%] md:pb-[55%]">
                <img
                  src={card.image}
                  alt={`Wedgeheels ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-md"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mt-2 text-center">
                {card.name}
              </h3>
              <p className="text-lg font-bold text-orange-600">${card.price}</p>

              <div className="flex justify-center w-full mt-1.5">
                <button
                  onClick={() => handleAddToCart(card.name)}
                  className="text-white text-xs bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
                >
                  <PlusCircleIcon className="h-4 w-4 mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-full bg-gray-300 bg-opacity-90 p-4 fixed left-0 top-0 z-50 rounded-b-xl shadow-xl transform transition-all duration-500 ease-in-out ${
          isCartOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative flex items-center justify-between border-b border-gray-400 pb-2 mb-3">
          <button
            onClick={() => setIsCartOpen((prevState) => !prevState)}
            className="font-semibold text-sm text-red-600 bg-red-200 p-2 rounded-xl cursor-pointer hover:underline transition-all"
          >
            Shopping Cart
          </button>
        </div>
        {Object.keys(cart).map((itemName) => {
          const item = cards.find((card) => card.name === itemName);
          return item ? (
            <div
              key={itemName}
              className="flex justify-between items-center mb-3 border-b border-gray-300 pb-3"
            >
              <span className="w-1/4 text-sm">{item.name}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    handleUpdateQuantity(itemName, cart[itemName] - 1)
                  }
                  className="text-gray-700"
                >
                  <MinusCircleIcon className="h-4 w-4" />
                </button>
                <span>{cart[itemName]}</span>
                <button
                  onClick={() =>
                    handleUpdateQuantity(itemName, cart[itemName] + 1)
                  }
                  className="text-gray-700"
                >
                  <PlusCircleIcon className="h-4 w-4" />
                </button>
              </div>
              <span className="w-1/3 text-right mr-2 text-sm">
                ${(item.price * cart[itemName]).toFixed(2)}
              </span>
              <button
                onClick={() => handleRemoveFromCart(itemName)}
                className="text-red-600 text-xs"
              >
                Remove
              </button>
            </div>
          ) : null;
        })}
        <div className="mt-4 flex justify-between items-center text-sm">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Wedgeheels;
