import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
import "./Wishlist.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import CartContext from "../context/CartContext";

function Wishlist() {

  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);

  function removeWishlist(id) {setWishlistItems(prev => prev.filter(item => item.id !== id));}
  
  function addToCart(product) {

  const existingItem = cartItems.find(item => item.id === product.id);

  if (existingItem) {
    setCartItems(prev => prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1}: item));
    toast.success(`${product.title} quantity updated`);}
  else {
    setCartItems(prev => [...prev,{...product, quantity: 1}]);
    toast.success(`${product.title} added to cart`);
  }
  
}


  return (
    <div className="wishlist-page">

      <h1>My Wishlist ❤️</h1>

      {wishlistItems.length === 0 ? (
        <h2>No wishlist items yet</h2>
      ) : (

        <div className="wishlist-grid">

          {wishlistItems.map(item => (

            <div key={item.id} className="wishlist-card" onClick={() => navigate(`/product/${item.id}`)}>

              <img src={item.image} alt={item.title}/>

              <h3>{item.title}</h3>

              <p>₹{item.price}</p>

              <button className="cart-btn" onClick={(e) => {e.stopPropagation();
               addToCart(item);}}>Add To Cart</button>

              <button className="remove-btn" onClick={(e) => {e.stopPropagation();
                removeWishlist(item.id);}}>Remove</button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;