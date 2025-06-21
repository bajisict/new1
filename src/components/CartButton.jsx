import React, { useState, useEffect } from 'react';
import CartModal from './CartModal.jsx';

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  // Сагсны тоог шинэчлэх
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem('shopping-cart');
      if (savedCart) {
        const cartItems = JSON.parse(savedCart);
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setItemCount(total);
      } else {
        setItemCount(0);
      }
    };

    updateCartCount();
    
    // Storage event-г сонсох
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <>
      <button 
        className="btn btn-primary position-relative"
        onClick={() => setIsCartOpen(true)}
      >
        <i className="bi bi-cart3 me-2"></i>
        Сагс
        {itemCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {itemCount}
          </span>
        )}
      </button>
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default CartButton;