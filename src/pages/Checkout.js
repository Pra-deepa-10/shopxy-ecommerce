import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCreditCard } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import CartContext from "../context/CartContext";
import OrderContext from "../context/OrderContext";

import "./Checkout.css";

function Checkout() {

  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);
  const { setOrders } = useContext(OrderContext);

  const total = cartItems.reduce((sum, item) =>
    sum + item.price * item.quantity,0);

  function handleSubmit(e) {

    e.preventDefault();

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      date: new Date().toLocaleString(),
      status: "Delivered"
    };

    setOrders(prev => [...prev, newOrder]);

    setCartItems([]);

    toast.success(
      "Order placed successfully! 🎉"
    );

    navigate("/order-success");
  }

  return (
    <div className="checkout-page">

      <h1>
        <FaCreditCard />
        Checkout
      </h1>

      <div className="checkout-container">

        <form className="checkout-form" onSubmit={handleSubmit}>

          <input type="text" placeholder="Full Name" required/>
          <input type="email" placeholder="Email" required/>
          <textarea placeholder="Address" required/>
          <input type="text" placeholder="City" required/>
          <input type="text" placeholder="Pincode" required/>

          <div className="payment-method">

            <h3>Payment Method</h3>

            <label><input type="radio" name="payment" defaultChecked/>Cash on Delivery</label>
            <label><input type="radio" name="payment"/>UPI</label>
            <label><input type="radio" name="payment"/>Credit / Debit Card</label>
          </div>

          <button type="submit" className="place-order-btn">Place Order</button>

        </form>

        <div className="order-summary">

          <h2> <FaShoppingBag /> Order Summary</h2>

          <div className="summary-item">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="summary-item">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          

          {cartItems.map(item => (
            <div className="summary-item" key={item.id}>
              <span>{item.title} × {item.quantity}</span>
              <span>$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>

          ))}
          <div className="delivery-info">🚚 Estimated Delivery:<span>3-5 Business Days</span></div>

          <div className="summary-total">

            <span>Total</span>

            <span>
              $ {total.toFixed(2)}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;