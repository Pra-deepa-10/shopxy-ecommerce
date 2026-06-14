import './Cart.css'

function Cart({ cartItems, setCartItems }) {

  function removeItem(id) {
    const updatedCart = cartItems.filter(
      item => item.id !== id
    );
    setCartItems(updatedCart);
  }

  function increaseQuantity(id) {
    setCartItems(prev => 
      prev.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
    );
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
    (sum, item) =>
      (sum + item.price * item.quantity), 0);

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (<h2>Your Cart is Empty</h2>) : 
      ( <>
          {cartItems.map(item => (
        <div className="cartItem" key={item.id}>
          <div className="cart-left">
              <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-details">
             <h3>{item.title}</h3>
             <p>₹{item.price}</p>
              <div className="quantity-controls">
               <button onClick={() => decreaseQuantity(item.id)}> - </button>
               <span>{item.quantity}</span>
               <button onClick={() => increaseQuantity(item.id)}> + </button>
              </div>
            </div>
          </div>
              <button onClick={() => removeItem(item.id)}> Remove </button>
        </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button>
            Checkout
          </button>

        </>
      )}

    </div>
  );
}

export default Cart;