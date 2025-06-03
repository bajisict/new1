// // src/components/AddToCartButton.jsx
// import { useState } from 'react';

// export default function AddToCartButton({ product }) {
//   const [added, setAdded] = useState(false);

//   const handleClick = () => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
    
//     // Update cart count in navbar
//     const cartCount = document.getElementById('cartCount');
//     if (cartCount) {
//       cartCount.textContent = cart.length;
//     }
    
//     setAdded(true);
//     setTimeout(() => setAdded(false), 2000);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="btn btn-primary"
//     >
//       {added ? 'Added to Cart ✓' : 'Add to Cart'}
//     </button>
//   );
// }
