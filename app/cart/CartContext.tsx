"use client";
import React, { createContext, useState, useContext } from "react";

interface CartItem {
  name: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  cart: { [key: string]: number };
  addToCart: (name: string) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const addToCart = (name: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [name]: (prevCart[name] || 0) + 1,
    }));
  };

  const removeFromCart = (name: string) => {
    const newCart = { ...cart };
    delete newCart[name];
    setCart(newCart);
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(name);
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [name]: quantity,
      }));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
