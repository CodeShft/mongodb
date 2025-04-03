"use client";

import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";

const Stilettos = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cards = [
    {
      image:
        "https://ae01.alicdn.com/kf/S4ccb1bf665e146fbbf6f2138a61de2e3o.jpg",
      name: "Shiny Blue",
      price: 79.99,
    },
    {
      image:
        "https://www.fuss-schuhe-shop.de/WebRoot/Store25/Shops/64752260/5B19/291A/26DD/65A3/3024/0A0C/6D07/C0A4/Sa-Alina-petrol-blue-matte_1.jpg",
      name: "Matte Blue",
      price: 65.0,
    },
    {
      image:
        "https://productimages.hepsiburada.net/s/46/375-375/10859982389298.jpg",
      name: "Salmon Color",
      price: 69.99,
    },
    {
      image:
        "https://i5.walmartimages.com/seo/Women-s-Red-Pointed-Toe-High-Heels-Sexy-Soft-Sole-Slip-On-Stiletto-Heels-Party-Dress-Shoes_03448892-5f80-4b2f-afa9-01c6b4c33a6a.92271ada650d114733955e14ce4037e1.jpeg?odnHeight=264&odnWidth=264&odnBg=FFFFFF",
      name: "Shiny Red",
      price: 89.99,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/pair-black-suede-high-heel-600nw-2239493375.jpg",
      name: "Plain Black",
      price: 55.0,
    },
    {
      image:
        "https://cdn-2.jjshouse.com/upimg/s400/6b/69/e3168499c96a94fdf64e711591246b69.jpg",
      name: "Sparkling",
      price: 99.99,
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230602/wF7B/64796d9e42f9e729d7141d58/-473Wx593H-461888136-pink-MODEL.jpg",
      name: "Pink",
      price: 75.0,
    },
    {
      image:
        "https://productimages.hepsiburada.net/s/46/375-375/10859971772466.jpg",
      name: "Cotton Candy",
      price: 85.0,
    },
    {
      image: "https://m.media-amazon.com/images/I/61xRHj2SRWL.jpg",
      name: "Elegant Red",
      price: 120.0,
    },
    {
      image: "https://m.media-amazon.com/images/I/51KTJMLsKZL._AC_UY900_.jpg",
      name: "Purple",
      price: 90.0,
    },
    {
      image:
        "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/24939518_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=342&hei=417",
      name: "Shiny Gray",
      price: 77.99,
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/Hecf8be006e0f421b8ed4fb28fddaa63eK.jpg_720x720q50.jpg",
      name: "Emerald",
      price: 110.0,
    },
  ];

  const handleAddToCart = (name: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [name]: (prevCart[name] || 0) + 1,
    }));
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
    <div className="flex">
      <div className="max-h-screen overflow-auto p-3 flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-400 rounded-lg p-2 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              <div className="w-full relative pb-[80%] sm:pb-[70%] md:pb-[65%]">
                <img
                  src={card.image}
                  alt={`Stiletto ${index + 1}`}
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
        className={`w-full md:w-1/4 bg-gray-100 p-4 fixed right-0 top-0 bottom-0 z-50 md:relative ${
          isCartOpen ? "block" : "hidden md:block"
        }`}
      >
        <h2 className="font-semibold text-lg mb-4">Shopping Cart</h2>
        {Object.keys(cart).map((itemName) => {
          const item = cards.find((card) => card.name === itemName);
          return item ? (
            <div
              key={itemName}
              className="flex justify-between items-center mb-3 border-b border-gray-300 pb-3"
            >
              <span className="w-1/2 text-sm">{item.name}</span>
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
              <span className="w-1/3 text-right mr-4">
                ${(item.price * cart[itemName]).toFixed(2)}
              </span>
              <button
                onClick={() => handleRemoveFromCart(itemName)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ) : null;
        })}
        <div className="mt-4 flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      <button
        className="block md:hidden fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        Cart
      </button>
    </div>
  );
};

export default Stilettos;
