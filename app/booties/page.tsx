"use client";
import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";

const Booties = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cards = [
    {
      image:
        "https://media.kohlsimg.com/is/image/kohls/6795619_Gray?wid=240&hei=240&op_sharpen=1",
      name: "Moonlight",
      price: 49.99,
    },
    {
      image:
        "https://www.coopersofstortford.co.uk/images/products/medium/P049_GRYi_3.jpg",
      name: "Grey Cloud",
      price: 55.0,
    },
    {
      image:
        "https://staticv3.smallable.com/1530942-406x406q80/low-shearling-light-moon-boots.webp",
      name: "Light Glow",
      price: 89.99,
    },
    {
      image:
        "https://dms.deckers.com/koolaburra/image/upload/f_auto,q_auto,dpr_auto/v1718121271/catalog/images/transparent/1158590-SVPN_1.png?_s=RAABAB0",
      name: "Pink Panther",
      price: 69.99,
    },
    {
      image:
        "https://www.beekshop.com/cdn/shop/files/falcon-cognac-leather-booties-womens-beek-1_1400x.jpg?v=1698863014",
      name: "Cool Brown",
      price: 75.0,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e8MdXsgVK_t2LlqtmWMcr99ulXId5NTxlQ&s",
      name: "Grey Cloud",
      price: 59.99,
    },
    {
      image:
        "https://www.marshallshoes.co.uk/images/womens-680-13-samtchevreau-purple-suede-zip-up-ankle-boots-p17228-63342_image.jpg",
      name: "Snake Purple",
      price: 64.99,
    },
    {
      image:
        "https://www.fluevog.com/images/wanderer-purple-lace-up-ankle-boots-profile-inside-colour_image-0000029745-retina_detail.webp",
      name: "Purple Life",
      price: 79.99,
    },
    {
      image:
        "https://thursdayboots.com/cdn/shop/products/1024X1024-Women-Luna-Baby-081721-SideZipper.jpg?v=1630613382&width=1024",
      name: "Elegant Blue",
      price: 69.0,
    },
    {
      image:
        "https://alexamaries.com/cdn/shop/products/image_eba2f8f9-7e92-4b20-81f1-4b210b33b236.jpg?v=1664817325",
      name: "White Pearl",
      price: 63.0,
    },
    {
      image:
        "https://mcozyboots.com/cdn/shop/products/11302021-5302_1080x.jpg?v=1638791374",
      name: "Yellow Party",
      price: 55.0,
    },
    {
      image:
        "https://di2ponv0v5otw.cloudfront.net/posts/2024/02/13/65cba3df0841b9caa34d6ae4/s_wp_65cba3e1678c3a382756c1cf.webp",
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
                  alt={`Bootie ${index + 1}`}
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

export default Booties;
