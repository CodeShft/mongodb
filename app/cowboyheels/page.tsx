"use client";
import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";

const Cowboyheels = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cards = [
    {
      image:
        "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/41322/uploads/urunresimleri/buyuk/siyah-erkek-kovboy-ayakkabisi-axe--2afea.jpg",
      name: "Bitter",
      price: 49.99,
    },
    {
      image:
        "https://target.scene7.com/is/image/Target/GUEST_f3508d02-9b9a-41a7-a116-a825626ea8ed",
      name: "White Snow",
      price: 55.0,
    },
    {
      image:
        "https://footwearnews.com/wp-content/uploads/2024/07/best-cowboy-boots-khaite.png?w=800&h=800&crop=1",
      name: "Black & White",
      price: 89.99,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoDKEBi2NHrtVpXeswxu7JCy1oeQ8_IXZKg&s",
      name: "Barbie Cowboy",
      price: 69.99,
    },
    {
      image:
        "https://i5.walmartimages.com/asr/00c7a2fd-9e20-44a0-adc6-a3e960c6982b.2c6843b9d9aa2c2d1f07ddfdb81e223f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Butterfly",
      price: 75.0,
    },
    {
      image:
        "https://befreeshoes.es/media/catalog/product/cache/7795dbdfd36596b6305e17d7f8387ca6/s/a/sanse-373_snake_bronze-1.jpg",
      name: "Old but Gold",
      price: 59.99,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8U8VMYaMOIQxbQmLxYJ0AQVBmD2HKYr5b6FK9opgz6xCfGXKQyvaNg_qynEYydrv_2HA&usqp=CAU",
      name: "Brown Eye",
      price: 84.99,
    },
    {
      image: "https://i.ebayimg.com/images/g/R3cAAOSwKKZlE7Lg/s-l1600.jpg",
      name: "Pink Gum",
      price: 79.99,
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H3a4cbfa6e1ca4693bcbeb5144c814abfL.jpg_300x300.jpg",
      name: "Blue Owl",
      price: 69.0,
    },
    {
      image:
        "https://cdn.media.amplience.net/i/scvl/161628_354551_1?fmt=auto&w=640",
      name: "Rock Star",
      price: 63.0,
    },
    {
      image:
        "https://i5.walmartimages.com/seo/Dingo-Womens-Fine-N-Dandy-Fringe-Studded-Snip-Toe-Casual-Boots-Ankle-Mid-Heel-2-3_936ce384-bde2-46a1-91fe-2c9a97c6f3c5.bbb58248c27f9e9d2c8c6aa85387fe2f.jpeg",
      name: "Yellow Stone",
      price: 55.0,
    },
    {
      image:
        "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/n/12/8b5ea7e0-1509-4d03-a103-b48a62ea2dbd.png",
      name: "Orange Juice",
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
                  alt={`Cowboyheels ${index + 1}`}
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

export default Cowboyheels;
