import './Cart.css'
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { useNavigate } from "react-router-dom";

function Cart() {

  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  function removeItem(id) {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  }

  function increaseQuantity(id) {
  setCartItems(prev => prev.map(item => item.id === id ? {...item, quantity: (item.quantity || 1) + 1} : item ));
}

  function decreaseQuantity(id) {

    const itemToUpdate = cartItems.find(item => item.id === id);

    if (itemToUpdate.quantity > 1) {
      setCartItems(prev =>prev.map(item =>
          item.id === id? {...item, quantity: item.quantity - 1} : item )
      );

    } else {
      removeItem(id);
    }
  }

  const total = cartItems.reduce(
    (sum, item) => (sum + item.price * (item.quantity || 1)), 0);

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (<div className="empty-cart">
  <h2>🛒 Your Cart is Empty</h2>
  <p>Add some products and come back.</p>
</div>) : 
      ( <>
          {cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <div className="cart-left">
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-details">
             <h3>{item.title}</h3>
             <p>${item.price}</p>
              <div className="quantity-controls">
               <button onClick={() => decreaseQuantity(item.id)}> - </button>
               <span>{item.quantity}</span>
               <button onClick={() => increaseQuantity(item.id)}> + </button>
              </div>
            </div>
          </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}> Remove </button>
        </div>
          ))}

        <div className="cart-summary">
          <h2>Total: ${(total)}</h2>
          <button className="checkout-btn"  onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
        </>
      )}

    </div>
  );
}

export default Cart;