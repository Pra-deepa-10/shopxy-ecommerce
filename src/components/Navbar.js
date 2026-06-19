import './Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import WishlistContext from '../context/WishlistContext';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from 'react-icons/fa'       //This gives us a ready-made icon component.
import AuthContext from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function Navbar() {

  const { cartItems, setCartItems } = useContext(CartContext);
  const { wishlistItems, setWishlistItems} = useContext(WishlistContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogout() {
  try {

    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");

    setCartItems([]);
    setWishlistItems([]);

    await signOut(auth);

    toast.success("Logged out successfully");
    navigate("/login");

  } catch (error) {
    console.log(error);
  }
}

  return (
    <nav className="navbar">

      <Link to='/' className="logo">ShopXY</Link>

     <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/products">Products</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>

      <div className="nav-icons">
        <Link to="/wishlist" className="wishlist-container">
        <FaHeart className="wishlist-icon" /><span className="wishlist-badge">{wishlistItems.length}</span></Link>
        

        <Link to="/cart" className="cart-container">
          <FaShoppingCart className="cart-icon"/>
          <span className="cart-badge">{cartItems.length}</span>
        </Link>     

        {user ? (<div className="user-section"><span className="user-email">{user.email.split("@")[0]}</span>
        <button className="login-btn" onClick={handleLogout}>Logout</button></div>) : (
        <Link to="/login"><button className="login-btn">Login</button></Link>)}
      </div>

    </nav>
  )
}

export default Navbar