document.addEventListener('DOMContentLoaded', function() {
  // Сагсанд нэмэх функц
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('shopping-cart') || '[]');
    console.log('aaaa1:', cart);
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
    
    // Event илгээх
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Bootstrap toast харуулах
    showToast(`${product.name} сагсанд нэмэгдлээ!`, 'success');
  }

  // Toast харуулах функц
  function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container') || createToastContainer();
    
    const toastElement = document.createElement('div');
    toastElement.className = `toast align-items-center text-bg-${type} border-0`;
    toastElement.setAttribute('role', 'alert');
    
    toastElement.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          <i class="bi bi-check-circle me-2"></i>
          ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    `;
    
    toastContainer.appendChild(toastElement);
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
    
    toastElement.addEventListener('hidden.bs.toast', () => {
      toastElement.remove();
    });
  }

  function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container position-fixed top-0 end-0 p-3';
    container.style.zIndex = '1055';
    document.body.appendChild(container);
    return container;
  }

  // Add to cart button events
  document.addEventListener('click', function(e) {
    if (e.target.closest('.add-to-cart-btn')) {
      e.preventDefault();
      const button = e.target.closest('.add-to-cart-btn');
      
      const product = {
        id: parseInt(button.dataset.productId),
        name: button.dataset.productName,
        price: parseFloat(button.dataset.productPrice),
        image: button.dataset.productImage
      };
      
      addToCart(product);
    }
  });
  function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('shopping-cart') || '[]');
    const itemIndex = cart.findIndex(item => item.id === product.id);

    if (itemIndex !== -1) {
      if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
      } else {
        cart.splice(itemIndex, 1);
      }
      localStorage.setItem('shopping-cart', JSON.stringify(cart));
      // Event илгээх
      window.dispatchEvent(new Event('cartUpdated'));
      // Bootstrap toast харуулах
      showToast(`${product.name} сагснаас хасагдлаа!`, 'warning');
    }
  }

  document.addEventListener('click', function(e) {
    const button = e.target.closest('.btn-outline-secondary');
    console.log('aaaa2:', button);
    if (button) {
      e.preventDefault();
      console.log('aaaa3:', button);
      const product = {
        id: parseInt(button.dataset.productId),
        name: button.dataset.productName,
        price: parseFloat(button.dataset.productPrice),
        image: button.dataset.productImage
      };
      removeFromCart(product);
    }
  });
});