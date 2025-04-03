import React from "react";

interface CartItem {
  name: string;
  price: string;
  quantity: number;
}

interface CartProps {
  cart: { [key: string]: number };
  items: Array<{ name: string; price: string }> | undefined;
  handleRemove: (name: string) => void;
  handleUpdateQuantity: (name: string, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({
  cart,
  items = [],
  handleRemove,
  handleUpdateQuantity,
}) => {
  // Filter items that are in the cart
  const cartItems = items.filter(item => cart[item.name] > 0);

  return (
    <div className="max-h-screen overflow-auto p-3">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.name} className="flex justify-between items-center p-2 border-b">
              <div>
                <p>{item.name}</p>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (cart[item.name] > 1) {
                      handleUpdateQuantity(item.name, cart[item.name] - 1);
                    }
                  }}
                  className="text-xs bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{cart[item.name]}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.name, cart[item.name] + 1)}
                  className="text-xs bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.name)}
                  className="text-xs bg-gray-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
