import React, { useState, useEffect } from 'react';
import CartButton from './CartButton';

const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // localStorage-аас сагсны мэдээлэл унших
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    localStorage.getItem('shopping-cart');
  }, [isOpen]);

  // Сагсанд хадгалах
  const saveCart = (items) => {
    localStorage.setItem('shopping-cart', JSON.stringify(items));
    setCartItems(items);
  };

  // Тоо ширхэг өөрчлөх
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    saveCart(updatedItems);
    updateCartCount(updatedItems);
  };

  // Бараа устгах
  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    saveCart(updatedItems);
    updateCartCount(updatedItems);
  };

  // Сагс цэвэрлэх
  const clearCart = () => {
    saveCart([]);
    updateCartCount([]);
  };

  // Нийт дүн тооцоолох
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('mn-MN').format(price) + '₮';
  };

  // Захиалга илгээх (SQLite-д хадгалах)
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          total: totalAmount,
          orderDate: new Date().toISOString()
        }),
      });

      if (response.ok) {
        clearCart();
        onClose();
        alert('Захиалга амжилттай илгээгдлээ!');
      } else {
        throw new Error('Захиалга илгээхэд алдаа гарлаа');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Алдаа: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateCartCount = (items) => {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
      cartCount.textContent = totalCount.toString();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              <i className="bi bi-cart3 me-2"></i>
              Миний сагс ({totalItems} бараа)
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
            ></button>
          </div>
          
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-cart-x display-1 text-muted"></i>
                <h4 className="mt-3 text-muted">Сагс хоосон байна</h4>
                <p className="text-muted">Бараа нэмж эхлээрэй!</p>
              </div>
            ) : (
              <>
                <div className="row g-3">
                  {cartItems.map(item => (
                    <div key={item.id} className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-3">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="img-fluid rounded"
                                style={{height: '80px', objectFit: 'cover'}}
                              />
                            </div>
                            <div className="col-6">
                              <h6 className="mb-1">{item.name}</h6>
                              <p className="text-primary mb-0 fw-bold">
                                {formatPrice(item.price)}
                              </p>
                            </div>
                            <div className="col-3">
                              <div className="input-group input-group-sm mb-2">
                                <button 
                                data-product-id={item.id}
                                data-product-name={item.name}
                                data-product-price={item.price}
                                data-product-image={item.image}
                                  className="btn btn-outline-secondary "
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <i className="bi bi-dash"></i>
                                </button>
                                <input 
                                  type="number" 
                                  className="form-control text-center"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  min="1"
                                />
                                <button 
                                  className="btn btn-outline-secondary"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <i className="bi bi-plus"></i>
                                </button>
                              </div>
                              <button 
                                className="btn btn-outline-danger btn-sm w-100"
                                onClick={() => removeItem(item.id)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <hr />
                
                {/* Нийт дүн */}
                <div className="bg-light p-3 rounded">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Нийт дүн:</h5>
                    <h4 className="mb-0 text-primary">{formatPrice(totalAmount)}</h4>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-outline-secondary"
                onClick={clearCart}
              >
                <i className="bi bi-trash me-1"></i>
                Бүгдийг устгах
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Илгээж байна...
                  </>
                ) : (
                  <>
                    <i className="bi bi-credit-card me-1"></i>
                    Худалдан авах
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
