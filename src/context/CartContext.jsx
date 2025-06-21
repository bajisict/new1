import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ localStorage зөвхөн browser дээр ажиллана
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = JSON.parse(localStorage.getItem('shopping-cart') || '[]');
      setCart(savedCart);
    }
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('shopping-cart', JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart
      .map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);

    setCart(updatedCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('shopping-cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
