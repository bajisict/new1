import { useCart } from '../context/CartContext';

export default function CartIcon() {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      🛒 <span>{count}</span>
    </div>
  );
}
